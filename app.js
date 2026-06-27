fetch('products.json').then(res => res.json()).then(data => {
    const grid = document.getElementById('productGrid');
    data.forEach(item => {
        grid.innerHTML += `
            <div class="card" onclick="window.location.href='product.html?id=${item.id}'">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">${item.price} €</p>
                <button class="buy-button">Подробнее</button>
            </div>`;
    });
});
