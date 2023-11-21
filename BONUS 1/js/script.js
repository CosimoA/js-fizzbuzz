/*
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*/

const container = document.querySelector(".container");

// Imposta il cilo incrementale
for (var i = 1; i <= 100; i++) {
    // Creo div generico
    const box = document.createElement("div");
    // Inserisco il div nel Div container già esistente
    container.append(box);
    // Trova i numeri divisibile *3 e *5
    if (i % 15 == 0){
        box.append("FizzBuzz");
        console.log("FizzBuzz");
    } // Trova i numeri divisibili *3
    else if (i % 3 == 0) {
        box.append("Fizz");
        console.log("Fizz");
    } // Trova i numeri divisibili *5
    else if (i % 5 == 0) {
        box.append("Buzz");
        console.log("Buzz");
    } // Se i numeri non sono divisibili
    else 
    box.append(i);
    console.log(i);
}

