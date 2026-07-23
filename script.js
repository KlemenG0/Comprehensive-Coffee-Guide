const container = document.getElementById("coffee-container");
const title = document.getElementById("category-title");


function displayCoffees(list){


container.innerHTML="";


list.forEach(coffee=>{


let card=document.createElement("div");

card.className="coffee-card";

card.id=coffee.id;


card.innerHTML=`

<h3>${coffee.name}</h3>

<p>${coffee.description}</p>

`;


card.onclick=function(){

showCoffee(coffee);

};


container.appendChild(card);


});


}



function filterCoffee(category){


if(category==="all"){

title.innerHTML="Vsi kavni napitki";

displayCoffees(coffees);

return;

}


let filtered=coffees.filter(
coffee=>coffee.category===category
);


title.innerHTML=category;

displayCoffees(filtered);


}



function showCoffee(coffee){


container.innerHTML="";


title.innerHTML=coffee.name;


container.innerHTML=`

<div class="coffee-detail">

<h2>${coffee.name}</h2>

<h3>Opis</h3>
<p>${coffee.description}</p>

<h3>Izvor</h3>
<p>${coffee.origin}</p>

<h3>Priprava</h3>
<p>${coffee.preparation}</p>


</div>

`;

}




function openFromQR(){


let params=new URLSearchParams(window.location.search);

let coffeeID=params.get("coffee");


if(coffeeID){


let coffee=coffees.find(
c=>c.id===coffeeID
);


if(coffee){

showCoffee(coffee);

return;

}

}


displayCoffees(coffees);


}



openFromQR();
