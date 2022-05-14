// NAV MENU AND BUTTON
const menuBtn = document.querySelector('.menu-btn');
const navbarMenuBackground = document.querySelector('.navbar__menu-background');


menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    navbarMenuBackground.classList.toggle('menu-opend-closed');

    
});






