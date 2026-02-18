/* ============================================
   FERRAMENTA EDUCACIONAL - LOJA PEDAGÓGICA
   JavaScript - Funcionalidades
   Produtos digitais em PDF
   ============================================ */

// ==================== DATA ====================
const products = [
    {
        id: 1,
        name: "Carnê da Leitura - PDF",
        categoryLabel: "Alfabetização",
        price: 6.99,
        oldPrice: null,
        badge: "novo",
        icon: "fas fa-book-open",
        image: "img/carne-da-leitura.png",
        description: "O Carnê da Leitura é um material pedagógico em PDF voltado para o processo de alfabetização. Com atividades progressivas e lúdicas, auxilia crianças no reconhecimento de letras, sílabas e palavras de forma divertida e eficaz.",
        howToUse: "Imprima o PDF e entregue uma página por vez para a criança. Siga a sequência proposta: primeiro o reconhecimento visual das letras, depois a formação de sílabas e, por fim, a leitura de pequenas palavras. Pode ser usado individualmente ou em grupo.",
        video: null
    },
    {
        id: 2,
        name: "Brincando com as Sílabas - PDF",
        categoryLabel: "Jogos Pedagógicos",
        price: 6.99,
        oldPrice: null,
        badge: "destaque",
        icon: "fas fa-puzzle-piece",
        image: "img/brincando-com-as-silabas.png",
        description: "Brincando com as Sílabas é um jogo pedagógico que torna o aprendizado das sílabas uma experiência divertida. As crianças desenvolvem consciência fonológica enquanto combinam e formam palavras com as peças do jogo.",
        howToUse: "Imprima e recorte as peças do jogo. Espalhe as sílabas sobre a mesa e desafie a criança a combinar as partes para formar palavras. Pode ser jogado em duplas ou grupos pequenos, tornando a atividade ainda mais dinâmica.",
        video: null
    },
    {
        id: 3,
        name: "Hora da Leitura - PDF",
        categoryLabel: "Alfabetização",
        price: 6.99,
        oldPrice: null,
        badge: null,
        icon: "fas fa-clock",
        image: "img/hora-da-leiturinha.png",
        description: "Hora da Leitura é um material criativo para incentivar o hábito da leitura desde cedo. Com textos curtos, imagens coloridas e atividades de interpretação, a criança desenvolve fluência e compreensão leitora.",
        howToUse: "Reserve um momento tranquilo do dia para a leitura. Imprima as páginas e leia junto com a criança, fazendo perguntas sobre a história. Em seguida, proponha as atividades de interpretação presentes no material.",
        video: null
    },
    {
        id: 4,
        name: "Livro A Casa e o Seu Dono - PDF",
        categoryLabel: "Educação Infantil",
        price: 6.99,
        oldPrice: null,
        badge: "novo",
        icon: "fas fa-home",
        image: "img/a-casa-e-o-seu-dono.png",
        description: "\"A Casa e o Seu Dono\" é um livro infantil ilustrado que trabalha conceitos de pertencimento, família e identidade de forma lúdica e carinhosa. Ideal para crianças de 4 a 7 anos.",
        howToUse: "Leia a história em voz alta para a criança, mostrando as ilustrações. Após a leitura, converse sobre a história com perguntas simples como: 'Quem mora na casa?' e 'Como é a sua casa?'. Use as atividades do livro para fixar o aprendizado.",
        video: null
    },
    {
        id: 5,
        name: "Bambolê Voando Alto - PDF",
        categoryLabel: "Jogos Pedagógicos",
        price: 6.99,
        oldPrice: null,
        badge: "destaque",
        icon: "fas fa-circle-notch",
        image: "img/bambole-voando-alto.png",
        description: "Bambolê Voando Alto é um jogo pedagógico que une movimento e aprendizado! As crianças desenvolvem coordenação motora, reconhecimento de letras e números enquanto se divertem com as dinâmicas do jogo.",
        howToUse: "Imprima e monte o material conforme as instruções. Organize as crianças em grupos e siga as regras propostas. O jogo pode ser adaptado para sala de aula ou espaços abertos, sendo ótimo para aulas de educação física integrada à alfabetização.",
        video: null
    },
    {
        id: 6,
        name: "A Casa das Sílabas - PDF",
        categoryLabel: "Alfabetização",
        price: 6.99,
        oldPrice: null,
        badge: null,
        icon: "fas fa-spell-check",
        image: "img/a-casa-das-silabas.png",
        description: "A Casa das Sílabas é um material pedagógico que usa a metáfora de uma casa para ensinar as famílias silábicas de forma visual e intuitiva. Cada 'cômodo' da casa abriga um grupo de sílabas, facilitando a memorização.",
        howToUse: "Imprima e monte a casa das sílabas. Apresente um cômodo por vez, repetindo as sílabas em voz alta com a criança. Depois, use os cartões de palavras inclusos para que a criança localize as sílabas correspondentes na casa.",
        video: null
    },
    {
        id: 7,
        name: "Bingo das Sílabas - PDF",
        categoryLabel: "Jogos Pedagógicos",
        price: 6.99,
        oldPrice: null,
        badge: "novo",
        icon: "fas fa-th",
        image: "img/bingo.png",
        description: "O Bingo das Sílabas é um jogo coletivo e divertidíssimo para trabalhar o reconhecimento de sílabas e palavras. Perfeito para atividades em sala de aula ou em casa com a família, torna o aprendizado uma festa!",
        howToUse: "Imprima as cartelas e os marcadores. O professor ou um adulto sorteia as sílabas e as anuncia em voz alta. Cada jogador marca a sílaba na sua cartela. Ganha quem completar uma linha, coluna ou a cartela inteira primeiro!",
        video: null,
        isNew: true
    },
    {
        id: 8,
        name: "Tapete das Sílabas - PDF",
        categoryLabel: "Jogos Pedagógicos",
        price: 6.99,
        oldPrice: null,
        badge: "novo",
        icon: "fas fa-th-large",
        image: "img/tapete.png",
        description: "O Tapete das Sílabas transforma o chão em um grande tabuleiro de aprendizagem! As crianças pulam de sílaba em sílaba, formando palavras e desenvolvendo consciência fonológica de forma totalmente corporal e lúdica.",
        howToUse: "Imprima e plastifique as peças do tapete para maior durabilidade. Espalhe-as no chão em sequência. Proponha desafios: 'Pule nas sílabas que formam a palavra CASA!' A atividade pode ser individual ou em grupos com competição amigável.",
        video: null,
        isNew: true
    },
    {
        id: 9,
        name: "Kit Meio Ambiente - Atividades de Sustentabilidade - PDF",
        categoryLabel: "Ciências",
        price: 19.90,
        oldPrice: null,
        badge: "novo",
        icon: "fas fa-leaf",
        image: null,
        description: "O Kit Meio Ambiente é um conjunto completo de atividades pedagógicas sobre sustentabilidade e preservação ambiental. Inclui jogos, fichas de atividades, cartazes e propostas de projetos para engajar as crianças com o tema.",
        howToUse: "O kit é dividido em módulos temáticos: água, fauna, flora e reciclagem. Use cada módulo em uma semana ou conforme o planejamento escolar. As atividades incluem instruções detalhadas e podem ser adaptadas para diferentes faixas etárias.",
        video: null,
        isNew: true
    }
];

// ==================== STATE ====================
let cart = [];
let favorites = [];
let currentPage = 1;
const productsPerPage = 12;

// ==================== DOM ELEMENTS ====================
const productsGrid = document.getElementById('productsGrid');
const pagination = document.getElementById('pagination');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');

// ==================== CAROUSEL DATA ====================
// Automático: qualquer produto com isNew: true aparece no carrossel e na loja
const launchProducts = products.filter(p => p.isNew);

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadFavorites();
    renderProducts();
    initCarousel();
    setupEventListeners();
});

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Cart
    cartBtn.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sort
    sortSelect.addEventListener('change', () => {
        currentPage = 1;
        renderProducts();
    });

    // Search
    searchBtn.addEventListener('click', () => {
        currentPage = 1;
        renderProducts();
    });
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentPage = 1;
            renderProducts();
        }
    });

    // Back to top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== PRODUCTS ====================
function getFilteredProducts() {
    let filtered = [...products];

    // Search filter
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.categoryLabel.toLowerCase().includes(searchTerm)
        );
    }

    // Sort
    const sortValue = sortSelect.value;
    switch (sortValue) {
        case 'nome-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nome-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'preco-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'preco-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        default:
            filtered.sort((a, b) => b.id - a.id);
            break;
    }

    return filtered;
}

function renderProducts() {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = filtered.slice(start, end);

    if (pageProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente buscar por outro termo</p>
            </div>
        `;
        pagination.innerHTML = '';
        return;
    }

    productsGrid.innerHTML = pageProducts.map((product, index) => {
        const isFav = favorites.includes(product.id);
        return `
            <div class="product-card" style="animation-delay: ${index * 0.06}s">
                ${product.badge ? `<span class="product-badge badge-${product.badge}">${getBadgeText(product.badge)}</span>` : ''}
                <div class="product-image">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-img">` : `<i class="${product.icon} placeholder-icon"></i>`}
                    <span class="pdf-tag"><i class="fas fa-file-pdf"></i> PDF</span>
                    <div class="product-image-overlay">
                        <button class="overlay-btn" title="Ver detalhes" onclick="showDetails(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="overlay-btn" title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}" onclick="toggleFavorite(${product.id})">
                            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                        <button class="overlay-btn" title="Compartilhar" onclick="showToast('Link copiado!')">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${product.categoryLabel}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="price-old">R$ ${formatPrice(product.oldPrice)}</span>` : ''}
                        <span class="price-current">R$ ${formatPrice(product.price)}</span>
                    </div>
                    <button class="btn-details" onclick="showDetails(${product.id})">
                        <i class="fas fa-eye"></i> Ver detalhes
                    </button>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})" id="btn-cart-${product.id}">
                        <i class="fas fa-cart-plus"></i> Adicionar ao carrinho
                    </button>
                </div>
            </div>
        `;
    }).join('');

    renderPagination(totalPages);
}

function getBadgeText(badge) {
    const texts = { novo: 'Novo', promo: 'Promoção', destaque: 'Destaque' };
    return texts[badge] || '';
}

function formatPrice(value) {
    return value.toFixed(2).replace('.', ',');
}

// ==================== PRODUCT DETAILS MODAL ====================
function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('modalOverlay');
    const media = document.getElementById('modalMedia');

    // Media: video iframe or image or icon
    if (product.video) {
        media.innerHTML = `<iframe src="${product.video}" allowfullscreen></iframe>`;
    } else if (product.image) {
        media.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    } else {
        media.innerHTML = `<i class="${product.icon} modal-placeholder-icon"></i>`;
    }

    document.getElementById('modalCategory').textContent = product.categoryLabel;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').innerHTML =
        `${product.oldPrice ? `<span style="font-size:1rem;color:#aaa;text-decoration:line-through;margin-right:8px;">R$ ${formatPrice(product.oldPrice)}</span>` : ''}R$ ${formatPrice(product.price)}`;
    document.getElementById('modalDescription').textContent = product.description || 'Descrição em breve.';
    document.getElementById('modalHowToUse').textContent = product.howToUse || 'Instruções em breve.';

    const cartBtn = document.getElementById('modalAddCart');
    cartBtn.onclick = () => { addToCart(product.id); closeModal(); };

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
});

// ==================== PAGINATION ====================
function renderPagination(totalPages) {
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;

    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 || i === totalPages ||
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="padding: 0 5px; color: #aaa;">...</span>`;
        }
    }

    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;

    pagination.innerHTML = html;
}

function goToPage(page) {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderProducts();
    document.getElementById('loja').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==================== CART ====================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    animateCartButton(productId);
    showToast(`"${product.name.substring(0, 30)}..." adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    renderCartItems();
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    updateCartUI();
    renderCartItems();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotal.textContent = `R$ ${formatPrice(totalPrice)}`;
    cartFooter.style.display = cart.length > 0 ? 'block' : 'none';
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">` : `<i class="${item.icon}"></i>`}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${formatPrice(item.price * item.qty)}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');
}

function animateCartButton(productId) {
    const btn = document.getElementById(`btn-cart-${productId}`);
    if (!btn) return;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fas fa-cart-plus"></i> Adicionar ao carrinho';
    }, 1500);
}

function openCart() {
    renderCartItems();
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function saveCart() {
    localStorage.setItem('fe_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('fe_cart');
    if (saved) {
        try { cart = JSON.parse(saved); } catch(e) { cart = []; }
    }
    updateCartUI();
}

// ==================== FAVORITES ====================
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removido dos favoritos');
    } else {
        favorites.push(productId);
        showToast('Adicionado aos favoritos!');
    }
    saveFavorites();
    renderProducts();
}

function saveFavorites() {
    localStorage.setItem('fe_favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem('fe_favorites');
    if (saved) {
        try { favorites = JSON.parse(saved); } catch(e) { favorites = []; }
    }
}

// ==================== TOAST ====================
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ==================== CAROUSEL ====================
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!track) return;

    // Render carousel cards
    track.innerHTML = launchProducts.map(product => `
        <div class="carousel-card">
            <div class="product-image">
                <span class="badge-launch"><i class="fas fa-rocket"></i> Lançamento</span>
                ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-img">` : `<i class="${product.icon} placeholder-icon"></i>`}
                <span class="pdf-tag"><i class="fas fa-file-pdf"></i> PDF</span>
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    ${product.oldPrice ? `<span class="price-old">R$ ${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="price-current">R$ ${formatPrice(product.price)}</span>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar
                </button>
            </div>
        </div>
    `).join('');

    let currentSlide = 0;

    function getVisibleCards() {
        return 1;
    }

    function getTotalSlides() {
        const visible = getVisibleCards();
        return Math.max(1, launchProducts.length - visible + 1);
    }

    function updateCarousel() {
        const cards = track.querySelectorAll('.carousel-card');
        if (cards.length === 0) return;
        const cardWidth = cards[0].offsetWidth + 20; // 20 = gap
        track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
        renderDots();
    }

    function renderDots() {
        const total = getTotalSlides();
        dotsContainer.innerHTML = '';
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${i === currentSlide ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        }
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < getTotalSlides() - 1) {
            currentSlide++;
            updateCarousel();
        }
    });

    // Auto-play
    let autoPlay = setInterval(() => {
        if (currentSlide < getTotalSlides() - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateCarousel();
    }, 4000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
            if (currentSlide < getTotalSlides() - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateCarousel();
        }, 4000);
    });

    // Recalculate on resize
    window.addEventListener('resize', () => {
        if (currentSlide >= getTotalSlides()) currentSlide = getTotalSlides() - 1;
        updateCarousel();
    });

    updateCarousel();
}

// ==================== HERO STARS ====================
(function initHeroStars() {
    const canvas = document.getElementById('starsCanvas');
    const hero = document.getElementById('heroBanner');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    const STAR_COUNT = 150;
    const MOUSE_RADIUS = 140;
    const REPEL_FORCE = 9;
    const FRICTION = 0.92;
    const RETURN_SPEED = 0.03;

    const starColors = ['#ec4899', '#f9a8d4', '#fbbf24', '#fcd34d', '#60a5fa', '#c084fc', '#4ade80'];
    let mouse = { x: -9999, y: -9999 };
    let stars = [];

    function resize() {
        const rect = hero.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            stars.push({
                x: x,
                y: y,
                homeX: x,
                homeY: y,
                vx: 0,
                vy: 0,
                size: Math.random() * 5 + 3,
                color: starColors[Math.floor(Math.random() * starColors.length)],
                opacity: Math.random() * 0.4 + 0.5,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                twinkleOffset: Math.random() * Math.PI * 2,
                points: Math.random() > 0.5 ? 4 : 5
            });
        }
    }

    function drawStar(cx, cy, points, outerR, innerR, color, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        for (let i = 0; i < points * 2; i++) {
            const r = i % 2 === 0 ? outerR : innerR;
            const angle = (Math.PI / points) * i - Math.PI / 2;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const time = Date.now() * 0.001;

        for (const star of stars) {
            // Repel from mouse
            const dx = star.x - mouse.x;
            const dy = star.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_RADIUS && dist > 0) {
                const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * REPEL_FORCE;
                star.vx += (dx / dist) * force;
                star.vy += (dy / dist) * force;
            }

            // Return to home
            star.vx += (star.homeX - star.x) * RETURN_SPEED;
            star.vy += (star.homeY - star.y) * RETURN_SPEED;

            // Apply friction
            star.vx *= FRICTION;
            star.vy *= FRICTION;

            // Move
            star.x += star.vx;
            star.y += star.vy;

            // Twinkle
            const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.3 + 0.7;
            const currentOpacity = star.opacity * twinkle;

            drawStar(star.x, star.y, star.points, star.size, star.size * 0.45, star.color, currentOpacity);
        }

        requestAnimationFrame(animate);
    }

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', () => {
        mouse.x = -9999;
        mouse.y = -9999;
    });

    window.addEventListener('resize', () => {
        resize();
        createStars();
    });

    resize();
    createStars();
    animate();
})();
