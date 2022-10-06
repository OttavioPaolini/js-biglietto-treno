// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



let userKm = parseInt(prompt("Quanti km devi fare?"));
console.log(userKm, typeof(userKm));
let userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof(userAge));

let basePrice = 0.21;
let ticketPrice = userKm * basePrice;
console.log(ticketPrice, typeof(ticketPrice));

let discountTwenty = ticketPrice * 20;
console.log(discountTwenty);

let discountSixtyFive = ticketPrice * 40;
console.log(discountSixtyFive);


let priceUnder = discountTwenty / 100;
console.log(priceUnder);
let priUnd = priceUnder.toFixed(2);
console.log(priUnd);

let priceOver = discountSixtyFive / 100;
console.log(priceOver);
let priOve = priceOver.toFixed(1)
console.log(priOve);


if (userAge < 18) {
    document.getElementById("result").innerHTML = priUnd;
} else{
    document.getElementById("result").innerHTML = ticketPrice
}
if (userAge > 65) {
    document.getElementById("result").innerHTML = priOve;
}