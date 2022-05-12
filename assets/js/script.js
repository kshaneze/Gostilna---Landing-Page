// NAV MENU AND BUTTON
const menuBtn = document.querySelector('.menu-btn');
const navbarMenuBackground = document.querySelector('.navbar__menu-background');
let menuOpen = false;

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    navbarMenuBackground.classList.toggle('menu-opend-closed');

    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    
});






