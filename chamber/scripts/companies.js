const url = "https://nefiserrano.github.io/wdd230/chamber/data/members.json";
const companiesList = document.querySelector('#companies-list')

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCompanies(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

const displayCompanies = (companies) => {
    companies.companies.forEach((company) => {
        let sectionElement = document.createElement('section');
        let companyName = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
        let representative = document.createElement('p');

        companyName.textContent = company.name;
        sectionElement.setAttribute('class', 'card')
        membership.setAttribute('class', 'remove')
        representative.setAttribute('class', 'remove')
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '450');
        logo.setAttribute('height', '250');
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.href = company.website;
        website.textContent = company.website;
        membership.textContent = company.membership;
        representative.textContent = `Representative: ${company.representative}`

        sectionElement.appendChild(companyName);
        sectionElement.appendChild(logo);
        sectionElement.appendChild(address);
        sectionElement.appendChild(phone);
        sectionElement.appendChild(website);
        sectionElement.appendChild(membership);
        sectionElement.appendChild(representative);
        companiesList.appendChild(sectionElement);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#companies-list");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}