// declare inital variables

const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

//expenses object with food  and transport properties
const expenses = {      
    food: 51.7501,
    transport:  10.2,
};
//added the semicolon, semicolons are used to separate statements. 
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
};

// You can change below however you want

//Convert the string tax value to a decimal numeric value using parseFloat
const taxAsDecimal = parseFloat(tax[913]) / 100; 

//Starting salary after tax is calculated here
const startingAfterTax = salary * (1 - taxAsDecimal); 

//I concatinated using... the variables to get the rental value
const type = `${lodging} ${size}`;  

// Create a new variable balance from items fetched from the expense object using .notation and the string valuable
const balance = (startingAfterTax - expenses.transport - expenses.food - rent['large-apartment']); 
console.log(`R ${balance.toFixed(2)}`); 
// a numenric value will be logged. 