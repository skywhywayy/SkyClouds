const id = new URLSearchParams(window.location.search).get('id');
fetch('products.json').then(res => res.json()).then(data => {
    const item = data.find(p => p.id == id);
    document.getElementById('prodName').innerText = item.name;
    document.getElementById('prodImg').src = item.img;
    document.getElementById('prodDesc').innerText = item.desc;
    document.getElementById('prodPrice').innerText = item.price + ' €';
    document.getElementById('buyBtn').onclick = () => {
        window.open(`https://t.me/skylinewayy?text=Hi! I want to order: ${item.name}. Price: ${item.price} €`, '_blank');
    };
});
