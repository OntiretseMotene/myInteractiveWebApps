//I defined 3 variables using const keyword.

const firstName = 'John';
const age = 35;
const hobby = 'Coding';

/**
 * I defined a function called "logTwice" that takes the "aboutUser" argument.
 * logTwice function logs this argument (aboutUser) twice using the console.log() method.
 */
 
const logTwice = (aboutUser) => {
  console.log(aboutUser)
  console.log(aboutUser)
};

// I changed the name of the hobby function to "aboutUser" to avoid naming conflict.
// then I called the aboutUser function to call "logTwice" with a backtick string using interpolation method to create a statement.
function aboutUser () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

aboutUser()