# goit-neo-js-hw-02

## Task 1. Ordering Droids


Complete this task in the filetask-1.js

The repair droid sales station is ready for launch; the software for the sales department is all that remains to be written. Declare a function makeTransaction(quantity, pricePerDroid, customerCredits) that compiles and returns a message about purchasing repair droids.

It declares three parameters, the values of which will be set during its call:

quantity — number of droids ordered
pricePerDroid — price of one droid
customerCredits — amount of money in the customer's account

Complete the function as follows:

Declare a variable to store the total order amount (the total cost of all ordered droids) and assign it the expression for calculating this amount.
Add a check to see if the customer can pay for the order:
if the total amount exceeds the customer's credits, the function should return the string "Insufficient funds!"
otherwise, the function should return the string "You ordered <quantity> droids worth <totalPrice> credits!", where <quantity> is the number of droids ordered, and <totalPrice> is their total cost.

Enter the code below after declaring your function to check its correctness. The console will display the results of its work.

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


## Task 2. Message formatting

Complete this task in the file task-2.js

Declare the function formatMessage(message, maxLength), which accepts a string (the message parameter) and checks its length against a specified maximum length (the maxLength parameter).

Complete the function code as follows:

If the string's length is equal to or less than maxLength, the function returns the original string unchanged.
If the length exceeds maxLength, the function truncates the string to maxLength characters, appends an ellipsis "..." at the end, and returns the truncated version.

Enter the code below after declaring your function to check its correctness. The results of its operation will be displayed in the console.

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


## Task 3. Spam check

Complete this task in the filetask-3.js

The function checkForSpam(message) accepts a string (the message parameter), checks it for prohibited words spam and sale, and returns the check result. Words in the message parameter string can be in any case, such as SPAM or sAlE.

Complete the function code as follows:

If a prohibited word (spam or sale) is found, the function returns the boolean true.
The function returns the boolean false if there are no prohibited words in the string.


Enter the code below after declaring your function to check its correctness. The results of its operation will be displayed in the console.

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


## Task 4. Product delivery

Complete this task in the file task-4.js

Declare the function getShippingCost(country) which should check the possibility of shipping the product to the user's country (the country parameter) and return a message about the result. Be sure to use the switch statement.

The format of the returned string is "Shipping to <country> will cost <price> credits", where <country> and <price> need to be replaced with the appropriate values.

List of countries and shipping costs:

China — 100 credits
Chile — 250 credits
Australia — 170 credits
Jamaica — 120 credits

The list clearly shows that delivery is not possible everywhere. If the specified country is not on the list, the function should return the string "Sorry, there is no delivery to your country.”

Enter the code below after declaring your function to check its correctness. The results of its operation will be displayed in the console.

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"



## Wymagania
- Kod musi być sformatowany za pomocą Prettier.
- Nie mogą występować żadne błędy ani ostrzeżenia w konsoli po uruchomieniu zadań.
- Wykonanie task 1, 2 i 3.


## Sformatowanie kodu za pomocą Prettier:

* Musisz posiadać zainstalowany Node.js, a następnie zainstalować Prettier w swoim projekcie. Można to zrobić za pomocą polecenia w terminalu:
  
```bash
npm install --save-dev prettier
```

* Następnie możesz uruchomić Prettier na swoim kodzie za pomocą:

```bash
npx prettier --write .
```

To polecenie sformatuje wszystkie pliki w projekcie.