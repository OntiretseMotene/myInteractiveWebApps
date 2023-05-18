//Defined 3 variables using const keyword.

const firstName = 'John';
const age = 35;
const hobby = 'Coding';

/**
 * Defined a function called "logTwice" that takes the argument "aboutUser".
 * logTwice function logs this argument (aboutUser) twice using the console.log() method.
 */
 
const logTwice = (aboutUser) => {
  console.log(aboutUser)
  console.log(aboutUser)
};

/**
 * Changed the name of the hobby function to "aboutUser" to avoid naming conflict.
 * Called the aboutUser function to call "logTwice"
 * The string statement is created using a template literal enclosed in backticks, (interpolation)
*/

function aboutUser () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

aboutUser()