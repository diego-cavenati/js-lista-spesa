// Lista della spesa

// Definisco l'array con la lista della spesa
const shoppingList = [
    "Pane",
    "Latte",
    "Pasta",
    "Riso"
]

// seleziono l'elemento nella DOM
const shoppingListElement = document.querySelector(".shopping");


let i = 0

while (i < shoppingList.length) {

    const element = shoppingList[i];
    
    const liElement = `<li>${element}</li>`;
    shoppingListElement.insertAdjacentHTML('beforeend', liElement)

    i++
}