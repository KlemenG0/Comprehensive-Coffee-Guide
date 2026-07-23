const container = document.getElementById(
    "coffee-container"
);



function displayCards(coffeeList) {


    container.innerHTML = "";



    coffeeList.forEach(coffee => {



        const card = document.createElement("div");



        card.classList.add(
            "card",
            coffee.category
        );



        card.innerHTML = `


            <img src="images/${coffee.image}">


            <div class="card-content">


                <h2>
                    ${coffee.name}
                </h2>



                <p>
                    ${coffee.definition}
                </p>



                <a href="coffee.html?id=${coffee.id}">

                    <button>
                        Več
                    </button>

                </a>


            </div>


        `;



        container.appendChild(card);


    });


}





// PRVI PRIKAZ STRANI

displayCards(coffees);







// FILTRIRANJE PO RUBRIKAH


function filterCards(category) {



    if(category === "all") {


        displayCards(coffees);


    } 
    
    
    else {


        const filtered =
        coffees.filter(
            coffee =>
            coffee.category === category
        );



        displayCards(filtered);


    }


}
