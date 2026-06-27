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
