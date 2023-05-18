let state = 'idle' //system status.
let user = null    // name of the user.
let calculated = '1'  // The number of times calcUser has been called.

// Only allowed to change below

/**
 * i defined three functions namely logCalc, calcUser and checkUser.
 * The "logCalc" function calculates the value of "calculated' variable and increases the value by 1.
 * The calcUser calls the "logCalc" function and sets the "user" and "state" variables based on the value of "calculated" value.
 * The "checkUser" function logs the user and calculated value to the console. 
 */

const logCalc = () => {  //Declared a new function "logCalc", takes no argument
    const isString = typeof calculated === 'string'; // check if calculated is a string using typeof operator
    console.log("typeof calculated")
    console.log(typeof calculated)
    console.log("typeof calculated === 'string'")
    console.log(typeof calculated === 'string')
    console.log("isString")
    console.log(isString)
    
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated; //passed the string to an integer using parseInt. 
    console.log("calculated")
    console.log(calculated)
    console.log("parseInt(calculated)")
    console.log(parseInt(calculated))
   
    console.log("isString ? parseInt(calculated) : calculated")
    console.log(isString ? parseInt(calculated) : calculated)
    calculated = calculatedAsNumber + 1; // This line increaments the value of "calculatedAsNumber by 1 assigns the result back to the original "calculated" variable.
};

const calcUser = () => { //Declare a new variable "calcUser"
  logCalc(); // call "logCalc" function

  /**
   * The if statements check conditions are met and assign strings to variables.
   */
  if (calculated > 2) {
    user = 'John';
  state = 'requesting';
  }
  if (calculated > 3) state = 'idle';
};

const checkUser = () => { //Declare a new function "checkUser".

  /**
   * The if statement checks if both "user" and "state" variables are truthy.
   * If so, it logs an interpolated string that logs the value of user and calculated in ().
   */
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`); //interpolated the string to log the name of user and number of times calcUser has been called.
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