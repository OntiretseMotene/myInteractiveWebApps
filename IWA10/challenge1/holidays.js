
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

console.log(holidays[futureId] ?.name || `ID ${futureId} not created yet`);

let copiedId = holidays[6].id;
let copiedName = 'X-mas';
let copiedDate = new Date(holidays[6].date);
let correctDate = new Date(copiedDate); 
correctDate.setHours(0);
correctDate.setMinutes(0);
let isEarlier = copiedDate < holidays[6].date;

if (isEarlier) {
    copiedDate = correctDate;
}

console.log('New date is earlier:', isEarlier); 
console.log('ID change:', copiedId && holidays[christmas].id !== copiedId);
console.log('Name change:', holidays[6].name === copiedName ? false : copiedName);
console.log('Date change:', holidays[6].date === copiedDate.toString() ? false : copiedDate.toString());

console.log(copiedDate.toLocaleDateString('en-GB'));

const holidayTimestaps = object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(
    //holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);

const lastHolidayTimestamp = Math.max(
    //holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(lastHolidayTimestamp).getMonth()+1;

const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth()+1;

console.log(`${"0"+firstDay}/${"0"+firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const obj = Object.keys(holidays) 
const randomHoliday = Mathfloor(Math.random () * obj.length);
const randomHolidaykey = newDate (holidays[randomHoliday].date);

console.log(randomHolidaykey.localeDateString ('en-GB'));