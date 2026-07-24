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

function createCard(coffee) {

    const card = document.createElement("div");

    card.className = "coffee-card";

    card.innerHTML = `

        <img src="${coffee.image}" alt="${coffee.name}" class="coffee-image">

        <h3>${coffee.name}</h3>

    `;

    card.onclick = () => {

        history.pushState({}, "", "?coffee=" + coffee.id);

        showCoffee(coffee);

    };

    return card;

}

function displayCoffees(list) {

    title.textContent = "Vsi kavni napitki";

    container.innerHTML = "";

    list.forEach(coffee => {

        container.appendChild(createCard(coffee));

    });

}

function filterCoffee(category) {

    history.pushState({}, "", "index.html");

    title.textContent = categoryNames[category];

    container.innerHTML = "";

    if (category === "all") {

        coffees.forEach(coffee => {

            container.appendChild(createCard(coffee));

        });

        return;

    }

    coffees
        .filter(coffee => coffee.category === category)
        .forEach(coffee => {

            container.appendChild(createCard(coffee));

        });

}

function showCoffee(coffee) {

    title.textContent = coffee.categoryName;

    let beans = "";

for(let i = 0; i < coffee.caffeine; i++){

    beans += `
        <img
            src="icons/coffee-bean.png"
            class="bean-icon"
            alt="Kavno zrno">
    `;

}

    container.innerHTML = `

        <div class="coffee-detail">

            <img src="${coffee.image}" class="detail-image">

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

                <div class="beans">

                ${beans}

                </div>

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

    if(coffeeID){

        const coffee = coffees.find(c => c.id === coffeeID);

        if(coffee){

            showCoffee(coffee);

            return;

        }

    }

    displayCoffees(coffees);

}

openFromQR();
