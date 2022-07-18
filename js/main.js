const menu = document.querySelector(".navbar-mobile");
const openMenuBtn = document.querySelector(".btn-open");
const closedMenuBtn = document.querySelector(".menu-header-closed");


function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closedMenuBtn.addEventListener("click", toggleMenu);