let hamburger = document.getElementById("hamburger");
let navBar = document.getElementById("nav-bar");

function openMenu () {                                  //slides menu bar from right to left. disables itself. enables hamburger to close menu bar, sliding left to right.
    navBar.style.left = "0px";
    hamburger.removeEventListener("click", openMenu);
    hamburger.addEventListener("click", closeMenu);
}

function closeMenu () {                                 //closes menu bar from left to right. disables itself, enables hamburger to open menu bar again.
    navBar.style.left = "100%";
    hamburger.removeEventListener("click", closeMenu);
    hamburger.addEventListener("click", openMenu);
}

hamburger.addEventListener("click", openMenu);