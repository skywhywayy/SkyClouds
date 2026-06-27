fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('productGrid');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">${item.price} €</p>
                <button class="buy-button" onclick="order('${item.name}', '${item.price}')">Order in Telegram</button>
            `;
            grid.appendChild(card);
        });
    });

function order(name, price) {
    const msg = `Hi! I want to order: ${name}. Price: ${price} €`;
    window.open(`https://t.me/skylinewayy?text=${encodeURIComponent(msg)}`, '_blank');
}
