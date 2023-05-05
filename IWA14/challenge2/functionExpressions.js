// script.js

/**
 * I used arrow function syntax. 
 * The functions define the parameters (a and b) of the add and multiply function.
 * The sum and product values are returned.
 * To return the product value i used the (*) operator instead of the (-) operator.
 */
const add = (a, b) => {
    return a + b;
 };
 
const multiply =  (a, b) => { 
    return a * b;
};

/**
 * I defined a function called internal.
 * This function uses "this" keyword to access properties of the "add" and "multiply".
 * 
 */


function internal() {
	const added = this.add(this.internal.a, this.internal.b)
    
	const multiplied = this.multiply(added, this.internal.c)
	console.log(multiplied)
}

// Not allowed to change below this

/**
 * I defined two objects 'example1' and 'example2' 
 * These objects have 3 properties: 'internal', 'add' and 'multiply'
 * The 'internal' property is an object that contain 3 values that have a numerical value (a, b and c).
 * The 'add' and 'multiply' properties are functions that perform mathematical operations.
 * Each object has a 'calculate' property.
 * This function calls the 'internal' function and passes the values from the 'internal' properties.
 * 
 */
const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}
//These function calls invoke the calculate function on the example1 and example2 objects respectively.
example1.calculate()
example2.calculate()