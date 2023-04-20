const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//Line below checks if an item is assigned to key 9. I fixed the syntax error

//console.log(holidays.futureId.name || 'ID {futureId} not created yet')
console.log(holidays[futureId].name || `ID ${futureId} not created yet`)

//This is a copy of the christmas object, with properties update
//let christmas = holidays[6];
const copied = Object.assign({}, holidays[christmas]);
copied.date = new Date (`25/12 ${currentYear}`); 
if (isEarlier) copied.date = correctDate;
const isEarlier = copied.date < holidays[6].date;
//correctDate.hours = 0
//correctDate.minutes = 0
copied.date.setHours(0, 0, 0, 0);


console.log('New date is earlier:', isEarlier);
//Console.log the changes 
console.log('ID change:', holidays[christmas].id !== copied.id || copied.id)
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name)
console.log('Date change:', holidays[christmas].date !== copied.date || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

/*const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth*/

const firstDate = new Date (firstHolidayTimestamp);
const lastDate = new Date (lastHolidayTimestamp);

console.log(`${firstDate}/${currentYear}`);
console.log(`${lastDate}/${currentYear}`);

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)