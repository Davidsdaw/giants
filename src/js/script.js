// Seleccionar el botón y el menú
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Agregar un evento al botón
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden'); // Alterna la clase 'hidden'
});



function openModal() {
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}