let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/**
 * This code defines three functions namely logCalc, calcUser and checkUser.
 * The "logCalc" function calculated the value of "calculated' variable and increases the value by 2.
 * The calcUser calls the "logCalc" function and sets the "user" and "state" variables based on the value of "calculated" value.
 * The "checkUser" function logs the user and calculated value to the console. 
 */

const logCalc = () => { 
    const isString = typeof calculated === 'string'; //I fixed the comparison operator with a strict equality
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated; //parsed the string to an integer using parseInt. Also fixed the function name.
    calculated = calculatedAsNumber + 2; // fixed assignment operator, and added an  assignment to the "calculated" variable.
};

const calcUser = () => {
  logCalc(); // added parenthesis to call the "calcUser" function.
  if (calculated > 2) {
    user = 'John';
  state = 'requesting'
  }
  if (calculated > 3) state = 'idle';
};

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`);
	}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()