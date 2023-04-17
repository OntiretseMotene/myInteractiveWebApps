const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

// Changed all the assignments (=) into definitions (:) on all object properties.
const leo = {                   // The leo const is an object
	name: leoName, 
	balance: leoBalance,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f', //Use correct CamelCasing
	age: 24,
	address: {                  //add colon to define properties in the address object and onject keys
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal, //change pascalCasing to camelCasing to follow JS naming conventions.
	}
};

const sarah = {                             //Add 
	name: sarahName + ' ' + sarahSurname,     // I used string interpolation to concatenante sarahName and sarahSurname
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',  //camelCasing
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal,          //camelCasing not pascalCasing
	}
};
console.log(leo, leo.address.postalCode);  // use dot notation correctly to access the nested properties of the postalCode.
console.log(sarah, sarah.address.postalCode);