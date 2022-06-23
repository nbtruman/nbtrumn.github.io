let hamburger = document.getElementById("hamburger");
let navBar = document.getElementById("nav-bar");

function openMenu () {
    navBar.style.left = "0px";
    hamburger.removeEventListener("click", openMenu);
    hamburger.addEventListener("click", closeMenu);
}

function closeMenu () {
    navBar.style.left = "100%";
    hamburger.removeEventListener("click", closeMenu);
    hamburger.addEventListener("click", openMenu);
}

hamburger.addEventListener("click", openMenu);