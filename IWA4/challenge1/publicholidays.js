
/* Declare variables using the "let" not "const" becuase: 
 * "let" is used for variables that store values that will change.
 * "const" is used for variables that store values that will not change.
 */
  

//const date: 2050, the date variable should be assigned as a string
const year = '2050';
//const status: 'student'
const status = 'student' || 'parent';
//const count = 0, 
let count = 0;
let date = 'June' || 'December';

if (year = 2050) {
	console.log('January', 'New Year’s Day'); //closing bracket fixed
	console.log('March', 'Human Rights Day');
	date = 'April';
	console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');
	//let count = count + 4, instead, use the addition assignment
    count += 4;

	if (status === "student") {
        console.log('June', 'Youth Day');
        count += 1;}

    // The if statements use an assignment (stu'=') instead of a comparison ('===')

	/* if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }
    */

	console.log('August', "Women's Day");

	console.log('September', 'Heritage Day');
	
	date = 'December';

	console.log(date, 'Day of Reconciliation');
	count += 3;

	console.log(date, 'Day of Goodwill');
	count += 1;

	

	if (status === "parent") {
	  console.log(date, 'Christmas Day');
	  count += 1;
  }

	
}

//console.log('The year is:', date)

console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);