const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//const owed = parseInt('R' + leoBalance + sarahBalance)
const owed = (parseFloat (leoBalance) + parseFloat(sarahBalance)).toFixed(2);
//const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}";
const leo = `${leoName} ${leoSurname} Owed: R ${(-parseFloat(leoBalance)).toFixed(2)}`;
//const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}";
const sarah = `${sarahName} ${sarahSurname} Owed: R ${(-parseFloat (sarahBalance)).toFixed(2)}`;
//const total = "Total amount owed: ";
const total = `Total amount owed: R ${-parseFloat(owed).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
//const result = leo + sarah + divider + divider + total + owed + divider
const result = `\n${leo} \n${sarah}\n${divider}\n${total.padStart(44)}\n${divider}`;

console.log(result);