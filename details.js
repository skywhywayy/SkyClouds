// Получаем ID из URL
const productId = new URLSearchParams(window.location.search).get('id');

async function initDetails() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        const item = data.find(p => p.id == productId);

        if (!item) {
            document.body.innerHTML = '<h1>Product not found</h1><a href="index.html">Back to store</a>';
            return;
        }

        renderDetails(item);
    } catch (err) {
        console.error("Error loading product:", err);
    }
}

function renderDetails(item) {
    // Заполняем DOM элементы
    document.getElementById('prodName').innerText = item.name;
    document.getElementById('prodImg').src = item.img;
    document.getElementById('prodDesc').innerText = item.desc;
    document.getElementById('prodPrice').innerText = `${item.price.toFixed(2)} €`;

    // Кнопка заказа в Telegram
    document.getElementById('buyBtn').onclick = () => {
        const text = encodeURIComponent(`Hi! I want to order: ${item.name}. Price: ${item.price} €`);
        window.open(`https://t.me/skylinewayy?text=${text}`, '_blank');
    };

    // Кнопка "Добавить в корзину" (если вы добавите её в HTML)
    const cartBtn = document.getElementById('addCartBtn');
    if (cartBtn) {
        cartBtn.onclick = () => {
            let cart = JSON.parse(localStorage.getItem('skyCloudsCart')) || [];
            cart.push(item);
            localStorage.setItem('skyCloudsCart', JSON.stringify(cart));
            alert(`${item.name} added to your cart!`);
            // Можно вызвать обновление счетчика, если он есть в шапке
            if (window.updateCartCount) window.updateCartCount();
        };
    }
}

document.addEventListener('DOMContentLoaded', initDetails);
