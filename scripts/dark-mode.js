const darkButton = document.querySelector('#darkMode');
const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const firstCard = document.querySelector('#card1');
const secondCard = document.querySelector('#card2');

darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
    h1.classList.toggle('light');
    firstCard.classList.toggle('darker');
    secondCard.classList.toggle('darker');
    if (main.classList.contains('dark')) {
        darkButton.src = "images/day-mode.webp";
    } else {
        darkButton.src = "images/night-mode.webp";
    }
})