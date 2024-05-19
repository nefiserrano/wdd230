const todaysDate = new Date();
document.querySelector('#currentYear').textContent = todaysDate.getFullYear();

document.querySelector('#lastModification').textContent = new Date(document.lastModified);