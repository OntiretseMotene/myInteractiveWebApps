const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//const owed = parseInt('R' + leoBalance + sarahBalance)
const owed = (parseFloat(-leoBalance) + parseFloat(-sarahBalance)).toFixed(2);

//The 'owed' variable calculates the sum of leoBalance and sarahBalance and uses the '.toFixed' method to round off to 2 decimal places.

//const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}";
const leo = `${leoName} ${leoSurname} Owed: R ${(-parseFloat(leoBalance)).toFixed(2)}`;

//I used template literals to format const variables using backticks.
// The parseFloat function is used to parse the string balance value to a numeric value. 
// .toFixed method to round off the folating point value to 2 decimal places.
// I used the - sign to convert the negative balances with the parsefloat.

//const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}";
const sarah = `${sarahName} ${sarahSurname} Owed: R ${(-parseFloat(sarahBalance)).toFixed(2)}`;

//const total = "Total amount owed: ";
const total = `Total amount owed: R ${parseFloat(owed).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

// The .tolocaleString is used to add a value separators to local currency conventions fraction digits  

//const result = leo + sarah + divider + divider + total + owed + divider
const result = `\n${leo}\n${sarah}\n${divider}\n${total.padStart(44)}\n${divider}`;

// The .padStart is used to achieve the indentation of two spaces at the start and end of the total amount owed with 44 character allowance.

console.log(result);