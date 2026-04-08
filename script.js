
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').oneclick=()=>{
    search.classList.toggle('active');
}
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-icon').oneclick=()=>{
    navbar.classList.toggle('active')
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}