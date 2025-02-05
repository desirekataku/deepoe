function saveChatHistory() {
    const chatContainer = document.getElementById('chat-container');
    const messages = chatContainer.innerHTML;
    localStorage.setItem('chatHistory', messages);
}

function loadChatHistory() {
    const chatContainer = document.getElementById('chat-container');
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
        chatContainer.innerHTML = savedMessages;
    }
}