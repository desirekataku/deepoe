document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const themeToggle = document.getElementById('theme-toggle');

    // Charger les messages sauvegardés
    loadChatHistory();

    // Envoyer un message
    sendBtn.addEventListener('click', async () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            userInput.value = '';

            // Appeler l'API IA
            const aiResponse = await callAIAPI(userMessage);
            addMessage('ai', aiResponse);

            // Sauvegarder la conversation
            saveChatHistory();
        }
    });

    // Basculer entre les thèmes
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });
});


//function addMessage(sender, message) {
//    const chatContainer = document.getElementById('chat-container');
//    const messageElement = document.createElement('div');
 //   messageElement.classList.add('message', `${sender}-message`);
 //   messageElement.textContent = message;
   // chatContainer.appendChild(messageElement);
 //   chatContainer.scrollTop = chatContainer.scrollHeight;
//}


function addMessage(sender, message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`, 'animate__animated', 'animate__fadeIn');
    messageElement.innerHTML = `<i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i> ${message}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}