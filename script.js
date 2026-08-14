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

const categoryDescriptions = {
    espresso: "Kavni napitki, pripravljeni na osnovi espressa, pri katerih je espresso glavna sestavina.",
    
    milk: "Kavni napitki, pri katerih se espresso kombinira z vročim mlekom, mlečno peno ali obojim.",
    
    methods: "Kavni napitki, pri katerih način priprave pomembno določa njihov značaj, okus in aromo.",
    
    regional: "Kavni napitki, značilni za določene države ali regije, kjer so se razvili kot del lokalne kavne kulture.",
    
    cold: "Hladni in ledeni kavni napitki, pripravljeni z ohlajeno kavo, ledom ali drugimi hladnimi sestavinami.",
    
    dessert: "Sladki kavni napitki in sladice, pri katerih ima kava pomembno vlogo.",
    
    alcohol: "Kavni napitki, ki jim je dodana alkoholna pijača, kot so liker, žganje ali druge alkoholne sestavine."
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

function createBeans(value) {
    let html = "";

    const fullBeans = Math.floor(value);
    const hasHalfBean = value % 1 >= 0.5;

    for (let i = 0; i < fullBeans; i++) {
        html += `
            <img src="icons/coffee-bean.svg"
                 class="bean-icon"
                 alt="Kavno zrno">
        `;
    }

    if (hasHalfBean) {
        html += `
            <img src="icons/coffee-bean-half.svg"
                 class="bean-icon"
                 alt="Polovično kavno zrno">
        `;
    }

    return html;
}

function showCoffee(coffee) {

    title.textContent = categoryNames[coffee.category];
    
    const categoryDescription = categoryDescriptions[coffee.category];

   let beans = "";

if (typeof coffee.caffeine === "number") {

    beans = createBeans(coffee.caffeine);

} else {

    beans =
        createBeans(coffee.caffeine.min) +
        `<span class="bean-range">–</span>` +
        createBeans(coffee.caffeine.max);

}

    container.innerHTML = `

        <div class="coffee-detail">

        <p class="category-description">
        ${categoryDescription}
        </p>

               <h6>${coffee.name}</h6>

            <img
            src="${coffee.detailImage}"
            alt="${coffee.name}"
            class="detail-image">

            <section>

                <h5>Opis</h5>

                <p style="text-align: center;">${coffee.description}</p>

            </section>

            <section>

                <h5>Priprava</h5>

                <p style="text-align: center;">${coffee.preparation}</p>

            </section>

            <section>

                <h5>Kofeinska moč</h5>

                <div class="beans">

                ${beans}

                </div>

            </section>
            
            <section>

                <h5>Alternativna imena</h5>

                <p style="text-align: center;">${coffee.alternativeNames}</p>

            </section>
            
            <section>

                <h5>Izvor</h5>

                <p style="text-align: center;">${coffee.origin}</p>

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
