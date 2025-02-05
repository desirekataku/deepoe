async function callDeepSeekAPI(userMessage) {
    const response = await fetch('https://api.deepseek.com/v1/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VOTRE_CLE_API_DEEPSEEK'
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim(); // Adaptez selon la structure de la réponse DeepSeek
}

function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}