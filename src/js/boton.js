  // Función para volver arriba

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animación suave
      });
    });
  
    // Mostrar el botón solo cuando se hace scroll hacia abajo
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollToTopButton.style.display = 'flex';
      } else {
        scrollToTopButton.style.display = 'none';
      }
  });
})