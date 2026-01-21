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

async function carregarRepositorio() {
    try {
        const response = await fetch('http://localhost:3000/musicas');
        const musicas = await response.json();
        
        const container = document.getElementById('grid-musicas');
        container.innerHTML = ''; // Limpa a lista antes de carregar

        musicas.forEach(m => {
            container.innerHTML += `
                <div class="projeto-card">
                    <div class="glow-bar"></div>
                    <h3>${m.titulo}</h3>
                    <p><i class="fas fa-user"></i> ${m.artista}</p>
                    
                    ${m.spotify_url ? `
                        <iframe src="${m.spotify_url}" width="100%" height="80" 
                        frameBorder="0" allow="encrypted-media" style="border-radius:12px;"></iframe>
                    ` : '<p style="font-size:0.8rem; opacity:0.5;">Player não disponível</p>'}
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar o banco de dados:", error);
    }
}

window.onload = carregarRepositorio;

