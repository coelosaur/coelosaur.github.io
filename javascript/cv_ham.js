// scripts.js

function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // Agregar o quitar clase 'open'
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("sidebar");
    var hamburgerMenu = document.querySelector(".hamburger-menu");

    // Verificar si el clic fue fuera del menú y del botón de hamburguesa
    if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        sidebar.classList.remove("open"); // Cerrar el menú
    }
});
