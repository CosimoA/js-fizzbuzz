/*
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

const container = document.querySelector(".container");

// Imposta il cilo incrementale
for (var i = 1; i <= 105; i++) {
    // Creo div generico
    const box = document.createElement("div");
    // Assegno le classi al Box
    box.classList.add("box", "text_center");
    // Inserisco il div nel Div container già esistente
    container.append(box);
    // Trova i numeri divisibile *3 e *5
    if (i % 15 == 0){
        box.classList.add("bg-4");
        box.append ("FizzBuzz");
        console.log("FizzBuzz");
    } // Trova i numeri divisibili *5
    else if (i % 5 == 0) {
        box.classList.add("bg-3");
        box.append("Buzz");
        console.log("Buzz"); 
    } // Trova i numeri divisibili *3
    else if (i % 3 == 0) {
        box.classList.add("bg-2");
        box.append("Fizz");
        console.log("Fizz");
    } // Se i numeri non sono divisibili
    else {
        box.classList.add("bg-1");
        box.append(i);
        console.log(i);
    }
}