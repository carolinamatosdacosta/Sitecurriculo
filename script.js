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
            setTimeout(typeEffect, 1200); // Pausa quando termina de escrever
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
        // Quando abre: vira um X e mostra o texto
        icon.className = 'fas fa-times'; 
        if(span) span.style.display = 'block';
    } else {
        // Quando fecha: volta o ícone do Spotify
        icon.className = 'fab fa-spotify';
        if(span) span.style.display = 'none';
    }
}

// Inicia as funções quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});