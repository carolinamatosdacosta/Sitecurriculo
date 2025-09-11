// Animação das barras de habilidade
window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-fill").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && bar.style.width === "0px") {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
