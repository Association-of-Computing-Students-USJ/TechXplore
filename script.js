
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
}

let header = document.querySelector('header');

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    // Make navbar solid when scrolled past hero, transparent at top
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}