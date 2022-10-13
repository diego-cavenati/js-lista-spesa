// Lista della spesa

// // Definisco l'array con la lista della spesa
// const shoppingList = [
//     "Pane",
//     "Latte",
//     "Pasta",
//     "Riso"
// ]

// // seleziono l'elemento nella DOM
// const shoppingListElement = document.querySelector(".shopping");


// let i = 0

// while (i < shoppingList.length) {

//     const element = shoppingList[i];
    
//     const liElement = `<li>${element}</li>`;
//     shoppingListElement.insertAdjacentHTML('beforeend', liElement)

//     i++
// }


// Definisco l'array vuoto
const shoppingList = []

// seleziono l'elemento nella DOM
const shoppingListElement = document.querySelector(".shopping");

// creo la variabile con il click dell'utente
const userClick = document.getElementById("userClick");

//prendo il campo inserito dall'utente
userClick.addEventListener("click", function() {

    // prendo la mail dell'utente dal form
    const userShop = document.getElementById("userShop").value;

    shoppingList.push(userShop);


    // rimuovi li già presenti al precedente click
    if (shoppingList.length > 1) {
        shoppingListElement.removeChild(shoppingList);
    }

    let i = 0
    while (i < shoppingList.length) {

    const element = shoppingList[i];
    const liElement = `<li>${element}</li>`;
    shoppingListElement.insertAdjacentHTML('beforeend', liElement)

    i++
    }
    console.log(shoppingList);
}
)

