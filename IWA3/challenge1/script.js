// scripts.js

import company form 'configuration' 
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

/* To import the constants in the config.js file to this file:
 * Change insert curly brackets "{}" around the variable names "company and year"
 * change the word "form" to "from" in import statements.
*/