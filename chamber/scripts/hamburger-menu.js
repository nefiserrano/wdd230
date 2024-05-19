const hamburger = document.querySelector('#menu');
const navElement = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburger.classList.toggle('open');
})