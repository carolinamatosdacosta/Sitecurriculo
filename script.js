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

typeEffect();

const minhasMusicas = [
    { titulo: "Dancing In The Flames", artista: "The Weeknd", id: "6699VpY7pUTh9U0O4v6KPT" },
    { titulo: "Don't Shut Me Down", artista: "ABBA", id: "0p69fBY9H7Y4SZY0pAbR9r" },
    { titulo: "Glad You Came", artista: "The Wanted", id: "1vYvYx7933X0W283C49V0r" }
];

function renderizarMusicas() {
    const container = document.getElementById('grid-musicas');
    if(!container) return;

    container.innerHTML = minhasMusicas.map(m => `
        <div class="projeto-card musica-mini">
            <div class="glow-bar"></div>
            <iframe style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${m.id}?utm_source=generator&theme=0" 
                width="100%" height="80" frameBorder="0" allow="encrypted-media">
            </iframe>
        </div>
    `).join('');
}

window.addEventListener('load', renderizarMusicas);