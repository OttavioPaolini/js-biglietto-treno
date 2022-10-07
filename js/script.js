// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



const userKm = parseInt(prompt("Quanti km devi fare?"));
console.log(userKm, typeof(userKm));
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof(userAge));

const basePrice = 0.21;
const ticketPrice = userKm * basePrice;
console.log(ticketPrice, typeof(ticketPrice));

const discountTwenty = ticketPrice * 20;
console.log(discountTwenty);

const discountSixtyFive = ticketPrice * 40;
console.log(discountSixtyFive);


const priceUnder = discountTwenty / 100;
console.log(priceUnder);
const priUnd = priceUnder.toFixed(2);
console.log(priUnd);

const priceOver = discountSixtyFive / 100;
console.log(priceOver);
const priOve = priceOver.toFixed(2)
console.log(priOve);


if (userAge < 18) {
    document.getElementById("result").innerHTML = priUnd;
} else{
    document.getElementById("result").innerHTML = ticketPrice.toFixed(2)
}
if (userAge > 65) {
    document.getElementById("result").innerHTML = priOve;
}