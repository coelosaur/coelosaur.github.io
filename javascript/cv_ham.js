// scripts.js

function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        mainContent.style.marginRight = "0";
    } else {
        sidebar.style.width = "250px";
        mainContent.style.marginRight = "250px";
    }
}
