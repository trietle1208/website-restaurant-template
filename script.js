let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onClick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onClick = () => {
    document.querySelector('#search-form').classList.remove('active');
}