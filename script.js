// 1. Animação de Digitação (Typing Effect)
const typingText = [
  "Programadora Iniciante 💻",
  "Estudante de Desenvolvimento Web 🌐",
  "Apaixonada por Tecnologia 🚀"
];

let i = 0; let j = 0; let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  let currentPhrase = typingText[i];
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, j--);
  } else {
    typingElement.textContent = currentPhrase.substring(0, j++);
  }

  if (!isDeleting && j > currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

// 2. Repositório de Músicas (Simulando o teu SQLite.db)
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
            <p><strong>${m.titulo}</strong> - ${m.artista}</p>
            <iframe style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${m.id}?utm_source=generator&theme=0" 
                width="100%" height="80" frameBorder="0" allow="encrypted-media">
            </iframe>
        </div>
    `).join('');
}

// 3. Status do Discord (Lanyard API)
async function carregarStatusDiscord() {
    const userID = "715243302250119259"; // O teu ID
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userID}`);
        const data = await response.json();
        const status = data.data;
        const container = document.getElementById('lanyard-status');
        
        if (status.listening_to_spotify) {
            container.innerHTML = `<p>🟢 Ouvindo: <strong>${status.spotify.song}</strong></p>`;
        } else if (status.activities.length > 0) {
            container.innerHTML = `<p>🎮 Atividade: <strong>${status.activities[0].name}</strong></p>`;
        } else {
            container.innerHTML = `<p>⚪ Status: ${status.discord_status}</p>`;
        }
    } catch (err) {
        console.log("Erro ao carregar Discord");
    }
}

// Iniciar tudo
window.addEventListener('load', () => {
    typeEffect();
    renderizarMusicas();
    carregarStatusDiscord();
    setInterval(carregarStatusDiscord, 30000); // Atualiza o status a cada 30s
});