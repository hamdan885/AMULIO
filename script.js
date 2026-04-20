// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    updateToggleButton();
});

function updateToggleButton() {
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
updateToggleButton();

// AI Knowledge Base - Comprehensive Answers
const aiKnowledge = {
    'hello': 'Hello! Welcome to AMULIO. I\'m here to help you with accurate answers to any question you have.',
    'hi': 'Hi there! How can I assist you today?',
    'how are you': 'I\'m functioning perfectly! Thanks for asking. How can I help you?',
    'what is your name': 'My name is AMULIO - an AI Chatbot Assistant designed to provide accurate answers to all your questions.',
    'who created you': 'I was created by MOHAMMAD HARIS, a class 12 student from SAIYYED HAMID SENIOR SECONDARY SCHOOL (SHSSS), Aligarh, Aligarh Muslim University (AMU). Contact: 8077097290 or Mohammadhaaris991@gmail.com',
    'what is amulio': 'AMULIO is an advanced AI Chatbot designed to answer any question accurately and correctly. It provides instant, reliable information on virtually any topic.',
    'contact': 'You can reach the creator at:\nPhone: 8077097290\nEmail: Mohammadhaaris991@gmail.com',
    'python': 'Python is a high-level, interpreted programming language known for its simplicity and readability. It\'s used in web development, data science, AI, machine learning, and automation. Created by Guido van Rossum in 1991.',
    'javascript': 'JavaScript is a programming language primarily used for web development. It runs in browsers and enables interactive web pages. It\'s also used in Node.js for backend development.',
    'what is ai': 'AI (Artificial Intelligence) is the simulation of human intelligence by computer systems. It includes machine learning, natural language processing, and automation to solve problems and make decisions.',
    'what is machine learning': 'Machine Learning is a subset of AI where systems learn from data and improve performance without being explicitly programmed. It uses algorithms to identify patterns and make predictions.',
    'capital of india': 'The capital of India is New Delhi. It\'s the seat of the Indian government and is located in the northern part of India.',
    'capital of france': 'The capital of France is Paris. It\'s famous for the Eiffel Tower and is known as the City of Light.',
    'what is mathematics': 'Mathematics is the science of numbers, quantities, and shapes. It includes algebra, geometry, calculus, and statistics, and is fundamental to science, engineering, and technology.',
    'what is physics': 'Physics is the natural science that studies matter, energy, and motion. It includes mechanics, thermodynamics, electromagnetism, and quantum mechanics.',
    'what is chemistry': 'Chemistry is the science that studies atoms, molecules, and chemical reactions. It explains how substances interact and transform.',
    'what is biology': 'Biology is the science of life and living organisms. It includes anatomy, physiology, genetics, evolution, and ecology.',
    'how to learn programming': 'To learn programming: 1) Choose a language (Python, JavaScript, Java), 2) Learn basics (variables, loops, functions), 3) Practice coding daily, 4) Build projects, 5) Join communities, 6) Read documentation.',
    'what is github': 'GitHub is a web-based platform for version control using Git. It allows developers to collaborate, manage code, track changes, and host open-source projects.',
    'what is html': 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides structure and content to websites.',
    'what is css': 'CSS (Cascading Style Sheets) is used to style HTML elements. It controls colors, fonts, layouts, and responsive design of web pages.',
    'what is the solar system': 'The Solar System consists of the Sun and all objects that orbit it, including 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), moons, asteroids, and comets.',
    'what is the earth': 'Earth is the third planet from the Sun and the only known planet to support life. It has one natural satellite (the Moon) and is located in the habitable zone.',
    'what is gravity': 'Gravity is the natural force of attraction between masses. It keeps us on Earth and holds planets in orbit around the Sun.',
    'what is evolution': 'Evolution is the process by which living organisms change and adapt over time. Charles Darwin\'s theory explains how species evolve through natural selection.',
    'what is dna': 'DNA (Deoxyribonucleic Acid) is a molecule that carries genetic instructions for life. It contains genes and is found in all living cells.',
    'what is photosynthesis': 'Photosynthesis is the process by which plants convert sunlight into chemical energy. It produces glucose and oxygen from carbon dioxide and water.',
    'what is respiration': 'Respiration is the process by which organisms release energy from food. It involves breathing and cellular respiration to produce ATP energy.',
    'thanks': 'You\'re welcome! Feel free to ask me anything else.',
    'thank you': 'Happy to help! Is there anything else you\'d like to know?',
    'bye': 'Goodbye! Feel free to come back anytime you have questions.',
    'goodbye': 'See you later! Have a great day!',
};

// Smart AI Response Function
function getAIResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Exact match
    if (aiKnowledge[message]) {
        return aiKnowledge[message];
    }
    
    // Partial match (case-insensitive substring search)
    for (const [key, value] of Object.entries(aiKnowledge)) {
        if (message.includes(key) || key.includes(message)) {
            return value;
        }
    }
    
    // If no match found, provide a helpful response
    return 'That\'s an interesting question! I\'m constantly learning. Could you rephrase that or ask me something else? I have knowledge about: Programming (Python, JavaScript, HTML, CSS), Science (Physics, Chemistry, Biology), Geography, AI, Machine Learning, and much more!';
}

// Send Message Function
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // User Message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = `<div class="text">${escapeHtml(message)}</div>`;
    chatbox.appendChild(userMessageDiv);
    
    // Clear input
    userInput.value = '';
    
    // AI Response (with delay for natural feel)
    setTimeout(() => {
        const aiResponse = getAIResponse(message);
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'message ai-message';
        aiMessageDiv.innerHTML = `<div class="text">${escapeHtml(aiResponse)}</div>`;
        chatbox.appendChild(aiMessageDiv);
        
        // Auto-scroll to bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);
    
    // Auto-scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Security: Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle Enter key
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Security: Prevent injection attacks
document.getElementById('userInput').addEventListener('input', function(e) {
    if (e.target.value.includes('<script>') || e.target.value.includes('javascript:')) {
        e.target.value = e.target.value.replace(/<script>/gi, '').replace(/javascript:/gi, '');
    }
});
