require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig, Payment } = require('mercadopago');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// ==================== SEGURANÇA ====================

// Rate limiter simples (sem pacote extra)
const rateLimitMap = new Map();
function rateLimit(maxReqs, windowMs) {
    return (req, res, next) => {
        const ip = req.ip || req.socket.remoteAddress || 'unknown';
        const now = Date.now();
        const key = `${ip}:${req.path}`;
        const timestamps = (rateLimitMap.get(key) || []).filter(t => now - t < windowMs);
        timestamps.push(now);
        rateLimitMap.set(key, timestamps);
        if (timestamps.length > maxReqs) {
            return res.status(429).json({ error: 'Muitas tentativas. Aguarde um momento.' });
        }
        next();
    };
}

// Preços oficiais dos produtos (fonte da verdade no backend)
const PRODUCT_PRICES = { 1:6.99, 2:6.99, 3:6.99, 4:6.99, 5:6.99, 6:6.99, 7:6.99, 8:6.99, 9:6.99 };

// Sanitizar HTML para evitar injeção no e-mail
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ==================== CONFIG ====================
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
const BREVO_API_KEY   = process.env.BREVO_API_KEY;
const PORT            = process.env.PORT || 3000;

if (!MP_ACCESS_TOKEN) {
    console.error('❌ MP_ACCESS_TOKEN não configurado no .env!');
    process.exit(1);
}

const mpClient = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });

// ==================== STORAGE ====================
// Ordens ficam salvas em memória e no arquivo orders.json
const DATA_FILE = path.join(__dirname, 'orders.json');
const orders = new Map();

function loadOrders() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        JSON.parse(data).forEach(([k, v]) => orders.set(k, v));
        console.log(`📂 ${orders.size} ordem(ns) carregada(s).`);
    } catch (_) {}
}

function saveOrders() {
    fs.writeFileSync(DATA_FILE, JSON.stringify([...orders.entries()], null, 2));
}

loadOrders();

// ==================== PRODUTOS ====================
let productLinks = {};
try {
    productLinks = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8'));
} catch (_) {
    console.warn('⚠️  products.json não encontrado. Os e-mails não terão links.');
}

// ==================== E-MAIL ====================
async function sendProductsEmail(order) {
    if (!BREVO_API_KEY) {
        console.warn('⚠️  BREVO_API_KEY não configurado. Pulando envio.');
        return;
    }

    const linksHtml = order.items.map(item => {
        const link = productLinks[String(item.id)];
        if (link && link.startsWith('http')) {
            return `<li><strong>${item.name}</strong> (x${item.qty}) → <a href="${link}" style="color:#ec4899">Clique aqui para baixar</a></li>`;
        }
        return `<li><strong>${item.name}</strong> (x${item.qty}) → Link será enviado em breve</li>`;
    }).join('');

    const totalFormatado = order.total.toFixed(2).replace('.', ',');

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Nunito',Arial,sans-serif;background:#ffe4f0;margin:0;padding:20px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1)">
    <div style="background:linear-gradient(135deg,#ec4899,#db2777);padding:30px;text-align:center">
      <h1 style="color:#fff;font-size:24px;margin:0">🎉 Pedido Confirmado!</h1>
      <p style="color:#fce7f3;margin:8px 0 0">Criativas da Tia Tati</p>
    </div>
    <div style="padding:28px">
      <p style="font-size:16px;color:#374151">Olá, <strong>${escapeHtml(order.name)}</strong>!</p>
      <p style="color:#6b7280">Seu pagamento foi confirmado. Aqui estão seus produtos digitais:</p>

      <div style="background:#fce7f3;border-radius:12px;padding:20px;margin:20px 0">
        <h3 style="margin:0 0 14px;color:#db2777;font-size:15px">📦 SEUS PRODUTOS</h3>
        <ul style="margin:0;padding-left:18px;line-height:2;color:#374151;font-size:14px">
          ${linksHtml}
        </ul>
      </div>

      <div style="border-top:1px solid #fce7f3;padding-top:16px;margin-top:16px">
        <p style="color:#6b7280;font-size:13px;margin:0">
          💰 <strong>Total pago:</strong> R$ ${totalFormatado}<br>
          📧 <strong>E-mail:</strong> ${order.email}<br>
          📱 <strong>WhatsApp:</strong> ${order.phone}
        </p>
      </div>

      <p style="color:#6b7280;font-size:13px;margin-top:20px">
        Dúvidas? Fale conosco pelo WhatsApp!<br>
        Com carinho, <strong style="color:#ec4899">Tia Tati 💖</strong>
      </p>
    </div>
  </div>
</body>
</html>`;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            sender: { name: 'Criativas da Tia Tati', email: 'criativosdatiataty@gmail.com' },
            to: [{ email: order.email, name: order.name }],
            subject: '🎉 Seus produtos chegaram! - Criativas da Tia Tati',
            htmlContent: html
        })
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Brevo error: ${err}`);
    }

    console.log(`✅ E-mail enviado para ${order.email}`);
}

// ==================== ROTAS ====================

// Verificar se o servidor está online
app.get('/health', (req, res) => res.json({ ok: true }));

// Testar envio de e-mail (protegido por chave secreta)
app.get('/test-email/:email', async (req, res) => {
    const secret = req.query.secret;
    if (!secret || secret !== process.env.ADMIN_SECRET) {
        return res.status(403).json({ error: 'Acesso negado.' });
    }
    try {
        await sendProductsEmail({
            name: 'Teste',
            email: req.params.email,
            phone: '35999999999',
            items: [{ id: 1, name: 'Carnê da Leitura - PDF', qty: 1 }],
            total: 6.99
        });
        res.json({ ok: true, message: 'E-mail enviado!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Criar cobrança Pix
app.post('/checkout', rateLimit(5, 10 * 60 * 1000), async (req, res) => {
    try {
        const { name, email, phone, items, total } = req.body;

        if (!name || !email || !items || !total) {
            return res.status(400).json({ error: 'Dados incompletos.' });
        }

        if (!Array.isArray(items) || items.length === 0 || items.length > 20) {
            return res.status(400).json({ error: 'Carrinho inválido.' });
        }

        // Validar total contra preços reais (evita manipulação de preço)
        const expectedTotal = items.reduce((sum, item) => {
            const price = PRODUCT_PRICES[item.id];
            if (!price) return sum;
            return sum + price * (item.qty || 1);
        }, 0);
        if (Math.abs(expectedTotal - Number(total)) > 0.05) {
            return res.status(400).json({ error: 'Valor inválido.' });
        }

        const payment = new Payment(mpClient);

        const result = await payment.create({
            body: {
                transaction_amount: Number(Number(total).toFixed(2)),
                description: 'Criativas da Tia Tati - Jogos Pedagógicos',
                payment_method_id: 'pix',
                payer: {
                    email,
                    first_name: name.split(' ')[0],
                    last_name: name.split(' ').slice(1).join(' ') || '.'
                }
            },
            requestOptions: { idempotencyKey: crypto.randomUUID() }
        });

        const paymentId = String(result.id);

        // Salvar ordem
        const order = { name, email, phone, items, total, status: 'pending', createdAt: new Date().toISOString() };
        orders.set(paymentId, order);
        saveOrders();

        console.log(`🛒 Novo pedido criado: ${paymentId} — ${name} — R$ ${total}`);

        res.json({
            paymentId,
            qrCode: result.point_of_interaction.transaction_data.qr_code,
            qrCodeBase64: result.point_of_interaction.transaction_data.qr_code_base64,
            expiresAt: result.date_of_expiration
        });

    } catch (err) {
        console.error('Erro ao criar pagamento:', err);
        res.status(500).json({ error: 'Erro ao gerar cobrança Pix. Tente novamente.' });
    }
});

// Verificar status do pagamento (frontend faz polling)
app.get('/check-payment/:id', rateLimit(60, 60 * 1000), async (req, res) => {
    try {
        const payment = new Payment(mpClient);
        const result = await payment.get({ id: req.params.id });

        // Se aprovado, envia e-mail (caso webhook não tenha disparado)
        if (result.status === 'approved') {
            const paymentId = String(req.params.id);
            const order = orders.get(paymentId);
            if (order && order.status !== 'approved') {
                order.status = 'approved';
                order.approvedAt = new Date().toISOString();
                orders.set(paymentId, order);
                saveOrders();
                console.log(`💰 Pagamento aprovado (polling): ${paymentId} — ${order.name}`);
                sendProductsEmail(order).catch(err => console.error('Erro ao enviar e-mail:', err));
            }
        }

        res.json({ status: result.status });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao verificar pagamento.' });
    }
});

// Webhook do Mercado Pago (confirma pagamento automaticamente)
app.post('/webhook', async (req, res) => {
    res.sendStatus(200); // Responde 200 logo para o MP saber que recebeu

    try {
        const { type, data } = req.body;

        if (type !== 'payment' || !data?.id) return;

        const payment = new Payment(mpClient);
        const result = await payment.get({ id: data.id });

        if (result.status !== 'approved') return;

        const paymentId = String(data.id);
        const order = orders.get(paymentId);

        if (!order) {
            console.warn(`⚠️  Pedido ${paymentId} não encontrado na memória.`);
            return;
        }

        if (order.status === 'approved') return; // Já processado

        order.status = 'approved';
        order.approvedAt = new Date().toISOString();
        orders.set(paymentId, order);
        saveOrders();

        console.log(`💰 Pagamento aprovado: ${paymentId} — ${order.name}`);
        await sendProductsEmail(order);

    } catch (err) {
        console.error('Erro no webhook:', err);
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`   Acesse: http://localhost:${PORT}/health`);
});
