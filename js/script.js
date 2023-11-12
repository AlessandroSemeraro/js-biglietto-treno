//KM DA PERCORRERE//
const passengerKm = parseInt (prompt('Inserire numero di kilomentri da percorrere'));
console.log (passengerKm + ' km');

//ETA' PASSEGGERO//
const passengerAge = parseInt (prompt('Inserire età passeggero'))
console.log (passengerAge + ' anni');

//PREZZO IN EURO PER KILOMETRO//
const priceForKm = 0.21;

//PREZZO BIGLIETTO SENZA SCONTO//
const priceTicket = (priceForKm * passengerKm);

//PASSEGGERO CON MENO DI 18 ANNI//
if (passengerAge < 18) {
    //SCONTO PER MINORI DI 18 ANNI//
    const discountPriceMinor = (( priceTicket * 20) /100) ;
    //PREZZO FINALE BIGLIETTO (per minori) = ( PREZZO DEL BIGLIETTO NO SCONTO  -  SCONTO PER MINORI DI 18 ANNI)ARROTONDAMENTO A DUE DECIMALI//
    const priceFinalTicket = ((priceTicket - discountPriceMinor).toFixed(2));
    console.log(priceFinalTicket + ' Euro');
    document.getElementById('output').innerHTML = 'il prezzo del biglietto è di  \u20AC ' + priceFinalTicket;
}
//PASSEGGERO OVER 65//
else if (passengerAge > 65) {
    //SCONTO OVER 65//
    const discountPriceOlder = (( priceTicket * 40) /100) ;
    //PREZZO FINALE BIGLIETTO (per over 65) = ( PREZZO DEL BIGLIETTO NO SCONTO  -  SCONTO OVER 65)ARROTONDAMENTO A DUE DECIMALI//
    const priceFinalTicket = ((priceTicket - discountPriceOlder).toFixed(2));
    console.log(priceFinalTicket + ' Euro');
    document.getElementById('output').innerHTML = 'il prezzo del biglietto è di  \u20AC ' + priceFinalTicket;
}
//QUALSIASI ALTRO PASSEGGERO//
else {
    //PREZZO FINALE BIGLIETTO PER PASSEGGERI TRA I 18 E I 65 ANNI E ARROTONDAMENTO A DUE DECIMALI//
    const priceFinalTicket = ((priceForKm * passengerKm).toFixed(2));
    console.log(priceFinalTicket + ' Euro');
    document.getElementById('output').innerHTML = 'il prezzo del biglietto è di  \u20AC ' + priceFinalTicket;
}

