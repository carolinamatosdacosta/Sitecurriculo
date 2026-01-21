// --- ANIMAÇÃO DE DIGITAÇÃO ---
const typingText = [
    "Programadora Full Stack 💻",
    "Estudante de Engenharia de Software 🌐",
    "Apaixonada por Tecnologia 🚀"
];

let i = 0; 
let j = 0; 
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (i < typingText.length) {
        if (!isDeleting && j <= typingText[i].length) {
            currentText = typingText[i].substring(0, j++);
            typingElement.textContent = currentText;
            setTimeout(typeEffect, 120);
        } else if (isDeleting && j >= 0) {
            currentText = typingText[i].substring(0, j--);
            typingElement.textContent = currentText;
            setTimeout(typeEffect, 70);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                i = (i + 1) % typingText.length;
            }
            setTimeout(typeEffect, 1200); 
        }
    }
}

// --- CONTROLE DO SPOTIFY (BOLINHA) ---
function toggleSpotify() {
    const widget = document.getElementById('spotify-widget');
    const icon = document.querySelector('#toggle-spotify i');
    const span = document.querySelector('#toggle-spotify span');
    
    widget.classList.toggle('spotify-opened');
    
    if (widget.classList.contains('spotify-opened')) {
        // Ícone de fechar (X)
        icon.className = 'fas fa-times'; 
        if(span) span.style.display = 'inline';
    } else {
        // Ícone do Spotify
        icon.className = 'fab fa-spotify';
        if(span) span.style.display = 'none';
    }
}

// Fechar o Spotify se o usuário clicar em qualquer outro lugar da página
document.addEventListener('click', (event) => {
    const widget = document.getElementById('spotify-widget');
    if (widget && widget.classList.contains('spotify-opened')) {
        if (!widget.contains(event.target)) {
            toggleSpotify();
        }
    }
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});