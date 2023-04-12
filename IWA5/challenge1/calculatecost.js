/*FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'*/ 

// Define constants for the above

const FREE_WARNING = 'Free shipping only appies to single costomer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// Define locations

let location1 = 'RSA';
let location2 = 'Nam';
let location3 = 'NorKor';
let location4 = 'other';



// Define items

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2; 
let pens = 5 * NONE_SELECTED;

// Define currencies

let currency1 = 'R';
let currency2 = "$";

// Define customers

let customers = 1;

// Conditionals 

let shipping;

/* Changes:
 * added correct comparison operators
 * shipping cost is 0 for items >= 1000
 * Fixed syntax errors such a missing brackets, semicolons
 * simplified the shipping calculations using if-else statements
*/

if (location = 'location1') { shipping === 400 && currency === 'currency1'}
if (location = 'location2') { shipping === 600 && currency ===  'currency2'}
if (location = 'location4') { shipping === 800 && currency === 'currency2'}
//else if (location = 'location3') { console.log(BANNED_WARNING)}


if (location === 'location1' && (shoes + toys + shirts + batteries+ pens) >= 1000 && customers === 1 && currency === 'currency1') { 
    shipping === 0;
} else {
    shipping === 400;

}

if (location === 'location2' && (shoes + toys + shirts + batteries+ pens) >= 60 && customers === 1 &&  currency === 'currency2') {
    shipping === 0;
} else {
  shipping = 600
}

/*shoes = 300 * 1
toys - 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}
*/

if (shipping === 0 && customers === 1) { console.log(FREE_WARNING);
 } else

if (location = 'NorKor') { console.log(BANNED_WARNING);
} else

    console.log('Price:', currency1, shoes + batteries + pens + shirts + shipping);

/*customers = '1'
const location = 'RSA'
currency = null*/