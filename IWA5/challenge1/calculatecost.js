/*FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'*/ 

// Define constants for the above commented out code.

const FREE_WARNING = 'Free shipping only appies to single costomer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

// Define variables

let location1 = 'RSA';
let location2 = 'NAM';

let currency1 = 'R';
let currency2 = '$';

let shipping1 = 400 ;
let shipping2 = 600 ;
let shippingFree = 0;
let shippingOther = 800;

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


if (location1 === 'RSA' && (shoes + toys + shirts + batteries+ pens) >= 1000 && customers === 1 && currency1 === 'R') { 
    shippingFree === 0;
} else {
    shipping1 === 400;

}

if (location2 == 'NAM' && (shoes + toys + shirts + batteries+ pens) >= 60 && customers === 1 &&  currency2 === '$') {
    shippingfree == 0;
} else {
  shipping2 = 600;
}

if (location !== 'RSA' && location !== 'NAM') {
    shippingOther === 800;
}

if (shipping1 && shipping2 === 0 && customers === 1) { console.log(FREE_WARNING);
} else

if (location = 'NorKor') { console.log(BANNED_WARNING);
} else

   console.log('Price:', currency1, shoes + toys + shirts + batteries + pens + shipping1);

/*shoes = 300 * 1
toys - 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $
*/

/*if (shoes + batteries + pens + shirts > 1000) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
    */





/*customers = '1'
const location = 'RSA'
currency = null*/