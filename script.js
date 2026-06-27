// Функция для заказа товара
function orderProduct(productName, price) {
    // 1. Формируем текст сообщения
    const message = `Hello! I would like to order: ${productName}. Price: ${price}`;
    
    // 2. Кодируем текст для URL, чтобы пробелы и символы не сломали ссылку
    const encodedMessage = encodeURIComponent(message);
    
    // 3. Ваш юзернейм в телеграм
    const telegramUsername = "skylinewayy";
    
    // 4. Формируем готовую ссылку
    const url = `https://t.me/${telegramUsername}?text=${encodedMessage}`;
    
    // 5. Показываем уведомление пользователю
    alert("Let's move on to placing your order: " + productName);
    
    // 6. Открываем Telegram
    window.open(url, '_blank');
}
// Функция для открытия окна
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Функция для закрытия окна
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Функция для заказа (сообщение на английском)
function orderProduct(productName, price) {
    const message = "Hi! I want to order: " + productName + ". Price: " + price;
    const url = "https://t.me/skylinewayy?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
