// Textos para a animação
const typingText = [
  "Programadora Iniciante 💻",
  "Estudante de Desenvolvimento Web 🌐",
  "Apaixonada por Tecnologia 🚀"
];

let i = 0; // índice da frase
let j = 0; // índice da letra
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
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
      setTimeout(typeEffect, 800);
    }
  }
}


function toggleSpotify() {
    const widget = document.getElementById('spotify-widget');
    const icon = document.querySelector('#toggle-spotify i');
    
    widget.classList.toggle('spotify-opened');
    
    if (widget.classList.contains('spotify-opened')) {
        icon.classList.remove('fab', 'fa-spotify');
        icon.classList.add('fas', 'fa-times'); // Vira um X
    } else {
        icon.classList.remove('fas', 'fa-times');
        icon.classList.add('fab', 'fa-spotify'); // Volta a ser Spotify
    }
}