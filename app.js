// Глобальное состояние приложения
const state = {
    products: [],
    cart: JSON.parse(localStorage.getItem('skyCloudsCart')) || [],
};

// Инициализация магазина
async function initStore() {
    try {
        const response = await fetch('products.json');
        state.products = await response.json();
        renderProducts(state.products);
        updateCartCount();
    } catch (err) {
        console.error("Failed to load products:", err);
    }
}

// Рендеринг списка товаров
function renderProducts(products) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = products.length ? '' : '<p>No products found.</p>';
    
    products.forEach(item => {
        grid.innerHTML += `
            <div class="card" onclick="window.location.href='product.html?id=${item.id}'">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">${item.price.toFixed(2)} €</p>
                <button class="buy-button" onclick="event.stopPropagation(); addToCart(${item.id})">Add to Cart</button>
            </div>`;
    });
}

// Поиск товаров
function handleSearch(query) {
    const filtered = state.products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
}

// Корзина: Добавление
function addToCart(productId) {
    const product = state.products.find(p => p.id === productId);
    state.cart.push(product);
    saveCart();
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Корзина: Сохранение
function saveCart() {
    localStorage.setItem('skyCloudsCart', JSON.stringify(state.cart));
}

// Обновление счетчика в шапке
function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.innerText = state.cart.length;
}

// Обработка событий поиска (если есть поле ввода)
const searchInput = document.getElementById('searchBar');
if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
}

// Запуск
document.addEventListener('DOMContentLoaded', initStore);
