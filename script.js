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
.modal {
    display: none; 
    position: fixed; 
    z-index: 1000; 
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.8);
}
.modal-content {
    background: #1e1e26;
    margin: 15% auto;
    padding: 20px;
    border: 2px solid #00d4ff;
    width: 80%;
    max-width: 400px;
    border-radius: 15px;
    text-align: center;
    color: white;
}
.close { color: #aaa; float: right; font-size: 28px; cursor: pointer; }
.card { cursor: pointer; } /* Чтобы было понятно, что на товар можно нажать */
