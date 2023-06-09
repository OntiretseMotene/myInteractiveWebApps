const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

/*const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone*/

/* I changed the typeof "number" to the declared variables "primaryPhone" and "secondaryPhone"
 * I also used the strict equality to validate that the phone numbers are "strings". It is common to save phone numbers as a stings in JS.
*/

const primaryValid = typeof primaryPhone === 'string'
const secondaryValid = typeof secondaryPhone === 'string'

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)
