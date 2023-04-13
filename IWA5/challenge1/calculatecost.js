/*FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'*/ 

// Define constants for the above commented out code.

const FREE_WARNING = 'Free shipping only appies to single costomer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// Define locations

let location = 'RSA';

// Define currency

let currency = 'R'

// Define shipping

let shipping = 400

// Define customers

let customers = 1;

// Define items

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2; 
let pens = 5 * NONE_SELECTED;





// Conditionals 


/* Changes:
 * added correct comparison operators
 * shipping cost is 0 for items >= 1000
 * Fixed syntax errors such a missing brackets, semicolons
 * simplified the shipping calculations using if-else statements
*/



//else if (location = 'location3') { console.log(BANNED_WARNING)}


if (location === 'RSA' && (shoes + toys + shirts + batteries+ pens) >= 1000 && customers === 1 && currency === 'R') { 
    shipping === 0;
} else {
    shipping === 400;

}

if (location === 'NAM' && (shoes + toys + shirts + batteries+ pens) >= 60 && customers === 1 &&  currency === '$') {
    shipping === 0;
} else {
  shipping = 600
}

if (location !== 'RSA' && location !== 'NAM') {
    shipping ===800
}

if (shipping === 0 && customers === 1) { console.log(FREE_WARNING);
} else

if (location = 'NorKor') { console.log(BANNED_WARNING);
} else

   console.log('Price:', currency, shoes + batteries + pens + shirts + shipping);
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



/*customers = '1'
const location = 'RSA'
currency = null*/