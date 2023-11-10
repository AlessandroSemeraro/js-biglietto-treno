//Distanza in km//
const distanceKm=parseInt(prompt('Inserisci la distanza che vuoi percorrere in Kilometri'));
console.log(distanceKm);

//Età viaggiatore//
const userAge=parseInt(prompt('Inserisci la tua età'));
console.log(userAge)

//Valore viaggio//
let totalPrice = 0

//Prezzo per km//
const priceForKm = 0.21 
const priceTicket = (distanceKm * priceForKm);
console.log (priceTicket + ' Euro') 


//Sconto per minorenni e over65//
 if (userAge < 18){
    const priceTicketDiscountMinor = (priceTicket/100)*20;
    const finalPriceTicketMinor = (priceTicket - priceTicketDiscountMinor);
    console.log (finalPriceTicketMinor);
 }
else if (userAge > 65){
    const priceTicketDiscountOldAge = (priceTicket/100)*40;
    const finalPriceTicketOldAge = (priceTicket - priceTicketDiscountOldAge);
    console.log (finalPriceTicketOldAge);
}