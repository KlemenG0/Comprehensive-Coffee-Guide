const container = document.getElementById("coffee-container");
const title = document.getElementById("category-title");

const categoryNames = {
    all: "Vsi kavni napitki",
    espresso: "Espresso",
    milk: "Espresso + mleko",
    methods: "Načini priprave",
    regional: "Regionalno",
    cold: "Ledeno in hladno",
    dessert: "Sladice",
    alcohol: "Z žganjem"
};

function displayCoffees(list) {

    title.textContent = "Vsi kavni napitki";

    container.innerHTML = "";

    list.forEach(coffee => {

        const card = document.createElement("div");

        card.className = "coffee-card";

        card.innerHTML = `
            <h3>${coffee.name}</h3>
            <p>${coffee.description}</p>
        `;

        card.onclick = () => {
            history.pushState({}, "", "?coffee=" + coffee.id);
            showCoffee(coffee);
        };

        container.appendChild(card);

    });

}

function filterCoffee(category) {

    history.pushState({}, "", "index.html");

    title.textContent = categoryNames[category];

    if (category === "all") {

        displayCoffees(coffees);

        return;

    }

    const filtered = coffees.filter(coffee => coffee.category === category);

    container.innerHTML = "";

    filtered.forEach(coffee => {

        const card = document.createElement("div");

        card.className = "coffee-card";

        card.innerHTML = `
            <h3>${coffee.name}</h3>
            <p>${coffee.description}</p>
        `;

        card.onclick = () => {
            history.pushState({}, "", "?coffee=" + coffee.id);
            showCoffee(coffee);
        };

        container.appendChild(card);

    });

}

function showCoffee(coffee) {

    title.textContent = coffee.categoryName;

    let stars = "";

    for (let i = 0; i < coffee.caffeine; i++) {
        stars += "★";
    }

    for (let i = coffee.caffeine; i < 5; i++) {
        stars += "☆";
    }

    container.innerHTML = `

        <div class="coffee-detail">

            <h2>${coffee.name}</h2>

            <section>

                <h3>Opis</h3>

                <p>${coffee.description}</p>

            </section>

            <section>

                <h3>Priprava</h3>

                <p>${coffee.preparation}</p>

            </section>

            <section>

                <h3>Kofeinska moč</h3>

                <p style="font-size:28px">${stars}</p>

            </section>

            <section>

                <h3>Izvor</h3>

                <p>${coffee.origin}</p>

            </section>

        </div>

    `;

}

function openFromQR() {

    const params = new URLSearchParams(window.location.search);

    const coffeeID = params.get("coffee");

    if (coffeeID) {

        const coffee = coffees.find(c => c.id === coffeeID);

        if (coffee) {

            showCoffee(coffee);

            return;

        }

    }

    displayCoffees(coffees);

}

openFromQR();
