// script.js

/**
 * Defined two functions "add" and "multiply" using arrow functions. 
 * The functions define the parameters (a and b) of the add and multiply functions.
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
 * Defined a function called "internal".
 * The "this" keyword is used in "internal" function to access the "add" and "multiply" functions as properties of an object.
 * It persforms mathematical operations on the values of the "internal" function.
 */


function internal() {
	const added = this.add(this.internal.a, this.internal.b)
    
	const multiplied = this.multiply(added, this.internal.c)
	console.log(multiplied)
}

// Not allowed to change below this

/**
 * Two objects 'example1' and 'example2'are defined here.
 * These objects have 3 properties: 'internal', 'add' and 'multiply'.
 * The 'internal' property is an nested object that contain 3 values that have a numerical value (a, b and c).
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
//These function calls invoke the "calculate" function on the example1 and example2 objects respectively.
example1.calculate()
example2.calculate()