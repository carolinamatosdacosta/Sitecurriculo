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

const API_URL = 'http://localhost:3000/musicas';

async function carregarMusicas() {
    try {
        const res = await fetch(API_URL);
        const musicas = await res.json();
        const lista = document.getElementById('lista-musicas');
        lista.innerHTML = musicas.map(m => `
            <li>
                <span><strong>${m.titulo}</strong> - ${m.artista}</span>
            </li>
        `).join('');
    } catch (err) {
        console.error("Erro ao carregar músicas. O servidor está ligado?");
    }
}

async function salvarMusica() {
    const titulo = document.getElementById('titulo').value;
    const artista = document.getElementById('artista').value;

    if (!titulo || !artista) return alert("Preencha tudo!");

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, artista })
    });

    document.getElementById('titulo').value = '';
    document.getElementById('artista').value = '';
    carregarMusicas();
}

carregarMusicas();
