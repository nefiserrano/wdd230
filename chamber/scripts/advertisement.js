const url = "https://nefiserrano.github.io/wdd230/chamber/data/members.json";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            getAdds(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
const advertisementDiv = document.querySelector('.advertisement');

function randomCompanies(data) {
    const eligible = data.companies.filter(company =>
        company.membership === "Gold Membership" || company.membership === "Silver Membership"
    );
    const chosen = [];
    while (chosen.length < 2 && eligible.length > 0) {
        const i = Math.floor(Math.random() * eligible.length);
        chosen.push(eligible.splice(i, 1)[0]);
    }
    return chosen;
}


function getAdds(data) {
    let chosenCompanies = randomCompanies(data);
    chosenCompanies.forEach(company => {
        let add = document.createElement('img');
        add.setAttribute('src', company.image);
        add.setAttribute('alt', `Logo of ${company.name}`);
        add.setAttribute('loading', 'lazy');
        add.setAttribute('width', '450');
        add.setAttribute('height', '250');
        advertisementDiv.appendChild(add);
    })
}