function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let message;
    let totalCost = quantity * pricePerDroid;
    if (totalCost > customerCredits) {
        message = "Insufficient funds!";
    }
    else {
        message = `You ordered ${quantity} droids worth ${totalCost} credits!`;
    }
    return message;
}

console .log(makeTransaction( 5 , 3000 , 23000 )); // "Zamówiłeś 5 droidów wartych 15000 kredytów!" 
console .log(makeTransaction( 3 , 1000 , 15000 )); // "Zamówiłeś 3 droidy warte 3000 kredytów!" 
console .log(makeTransaction( 10 , 5000 , 8000 )); // "Brak wystarczających środków!" 
console .log(makeTransaction( 8 , 2000 , 10000 )); // "Brak wystarczających środków!" 
console .log(makeTransaction( 10 , 500 , 5000 )); // "Zamówiłeś 10 droidów wartych 5000 kredytów!"
