/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
*/

// Imposta il cilo incrementale
for (var i = 1; i <= 100; i++) {
    // Trova i numeri divisibile *3 e *5
    if (i % 15 == 0){
        console.log("FizzBuzz");
    } // Trova i numeri divisibili *3
    else if (i % 3 == 0) {
        console.log("Fizz");
    } // Trova i numeri divisibili *5
    else if (i % 5 == 0) {
        console.log("Buzz");
    } // Se i numeri non sono divisibili
    else console.log(i);
}

