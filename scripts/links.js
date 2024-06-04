const baseURL = "https://nefiserrano.github.io/wdd230/";
const linksURL = "https://nefiserrano.github.io/wdd230/data/links.json";
const learningActivities = document.querySelector('#learning-activities')

async function getLinks() {
    const response = await fetch(linksURL);
    const data =  await response.json();
    displayLinks(data);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.weeks.forEach((week) => {
        let listItem = document.createElement('li');
        let list = document.createElement('ul');

        week.links.forEach((link) => {
            let linkItem = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            linkItem.appendChild(anchor);
            list.appendChild(linkItem);
        });

        listItem.textContent = week.week;
        listItem.appendChild(list);
        learningActivities.appendChild(listItem);
    });
}