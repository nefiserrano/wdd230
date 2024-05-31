const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}