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

const buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        filterCoffee(button.dataset.category);

    });

});

function createCard(coffee) {

    const card = document.createElement("div");

    card.className = "coffee-card";

    card.innerHTML = `

    <img src="${coffee.cardImage}"
    alt="${coffee.name}"
    class="coffee-image">

        <h3>${coffee.name}</h3>

    `;

    card.onclick = () => {

        history.pushState({}, "", "?coffee=" + coffee.id);

        showCoffee(coffee);

    };

    return card;

}

function displayCoffees(list) {

    container.innerHTML = "";

    list.forEach(coffee => {

        container.appendChild(createCard(coffee));

    });

}

function filterCoffee(category) {

    console.log(category);
    
    history.pushState({}, "", window.location.pathname);

    title.textContent = categoryNames[category];

    if (category === "all") {

        displayCoffees(coffees);

        return;

    }

    const filtered = coffees.filter(coffee => coffee.category === category);

    displayCoffees(filtered);

}

function showCoffee(coffee) {

    title.textContent = categoryNames[coffee.category];

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

            <img
            src="${coffee.detailImage}"
            alt="${coffee.name}"
            class="detail-image">

            <h6>${coffee.name}</h6>

            <section>

                <h5>Opis</h5>

                <p>${coffee.description}</p>

            </section>

            <section>

                <h5>Priprava</h5>

                <p>${coffee.preparation}</p>

            </section>

            <section>

                <h5>Kofeinska moč</h5>

                <div class="beans">

                ${beans}

                </div>

            </section>
            
            <section>

                <h5>Alternativna imena</h5>

                <p>${coffee.alternativeNames}</p>

            </section>
            
            <section>

                <h5>Izvor</h5>

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
