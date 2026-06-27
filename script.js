function orderProduct(productName, price) {
    const message = "Hi! I want to order: " + productName + ". Price: " + price;
    const url = "https://t.me/skylinewayy?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
