// scripts.js

/**
 * A "data" object is defined with an array called "lists".
 * The "lists" array contains 3 nested arrays.
 * Each nested array has strings: "first", "second" and "third".
 * The other arrays contain lists of numbers. 
 */
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

/**Three variables: ("first", "second" and "third") are declared using const.
 * They are assigned values from the second nested arrays ("data.lists") with lists of numbers arrays.
 * The values assigned are the second element of the first, second, and third arrays in data.lists, respectively.
 */
const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

/**
 * Declare a constant variable named extractBiggest and assigns it an arrow function with no parameters. 
 * Use this fuction to extract the biggest element from three arrays: first, second, and third.  
 * The function uses "if statements" (conditions) to return the largest element available from the three arrays for each loop.
 * This happens as follows:
 * It checks which array has the largest value by comparing the last elements of the arrays. 
 * If the first array has the largest value, it returns the last element of the first array. 
 * If not, it checks if the second array has the largest value, and if not, it returns the last element of the third array.
 * It also checks for empty arrays and makes sure the last element of one array is greater than or equal to the last element of another array before returning a value.
 * If the conditions in the previous line are met, this line is executed. It removes and returns the last element of the first array using the pop() method.
 */


const extractBiggest = () => {

	if (first.length > 0 && (second.length === 0 || first[first.length-1] > second[second.length-1]) &&
	 (third.length === 0 || first[first.length-1] > third[third.length-1])) {
		return first.pop();
	}

	if (second.length > 0 && (third.length === 0 || second[second.length-1] > third[third.length-1])) {
		return second.pop();
	} 
	
	if (third.length > 0) {
		return third.pop();
    }

	
}


const result = []

// Only edit above

/**
 * Use ".push" method to add elements to the end of arrays in the "extractBiggest()" fucntion
 * The function is called multiple times, and each returned value is pushed into the result array.
 */

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())


console.log(result)