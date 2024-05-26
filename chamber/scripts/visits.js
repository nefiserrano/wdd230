const msToDays = 24 * 60 * 60 * 1000;
const theDateToday = new Date();
const visitElement = document.querySelector("#visitDate");

if (localStorage.getItem('lastVisit')) {
    const lastVisitTimestamp = parseInt(localStorage.getItem('lastVisit'));
    const today = Date.now();
    const diffDays = daysBetween(today, lastVisitTimestamp);

    if (diffDays === 0) {
        visitElement.innerHTML = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        visitElement.innerHTML = "You last visited 1 day ago.";
    } else {
        visitElement.innerHTML = `You last visited ${diffdays} days ago.`;
    }
} else {
    visitElement.innerHTML = "Welcome! Let us know if you have any questions.";
}

function daysBetween(timestamp1, timestamp2) {
    const diffDays = Math.round(Math.abs((timestamp1 - timestamp2) / msToDays));
    return diffDays;
}

localStorage.setItem('lastVisit', Date.now());