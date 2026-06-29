function loadCart() {
    const cart = JSON.parse(localStorage.getItem('skyCloudsCart')) || [];
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    let total = 0;

    container.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div class="card" style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>${item.name}</span>
                <span>${item.price.toFixed(2)} €</span>
                <button onclick="removeFromCart(${index})" style="background:red; border:none; color:white; cursor:pointer;">X</button>
            </div>
        `;
    });

    totalEl.innerText = `Total: ${total.toFixed(2)} €`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('skyCloudsCart'));
    cart.splice(index, 1);
    localStorage.setItem('skyCloudsCart', JSON.stringify(cart));
    loadCart();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('skyCloudsCart')) || [];
    if (cart.length === 0) return alert("Cart is empty!");
    
    let text = "Hi! I want to order these items:\n";
    cart.forEach(item => text += `- ${item.name} (${item.price} €)\n`);
    
    window.open(`https://t.me/skylinewayy?text=${encodeURIComponent(text)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', loadCart);
