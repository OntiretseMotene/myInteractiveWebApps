
//Started over

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

/**
 * the code below logs the futureId that has been declared and tells the user that the id * is not created yet
 */
console.log( `ID ${futureId} not created yet`)
console.log('')


/**
 * A copied object and a new version of the christmas object is created. 
 * 
 * The date is set to a new date by modifying the hours and minutes to be set to midnight
 */
const copied = {

correctName :'X-mas',
correctId : holidays[6].id,
correctHours: holidays[6].date.setHours(0),
correctMinutes: holidays[6].date.setMinutes(0),
correctDate : new Date(holidays [6].date),
}

//checks if the new date is earlier than the old one and logs the results
const isEarlier = (copied.correctHours > holidays[6].date)
console.log('New date is earlier:', isEarlier)

console.log('')

/**
 * If the new date is set to true the statement checks if the id changed or not.
 * It will display the new version(name) of christmas
 * 
 * It will display the final date to check if it really changed or not by getting the *date and the month from the copied object new date
 */
if (isEarlier === true) {
    
console.log('ID change:', holidays[6].id != copied.correctId)
console.log('Name change:', copied.correctName)

const days = copied.correctDate.getDate()
const months = copied.correctDate.getMonth() +1

console.log(`Date Change: ${days}/${months}/${currentYear}`)

}

/**
 * Gets the minimun date from the holidays object. 
 * The first date is converted to an integer as it was a string using parseInt
 */
const firstHolidayTimestamp = Math.min(
   parseInt (holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

/**
 * Gets the maximum date from the holidays object. 
 * The first date is converted to an integer as it was a string using parseInt
 */
const lastHolidayTimestamp = Math.max(
    parseInt (holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

/**
 * once the minimum and maximum date is now known, the new date is set to get the date and
 * month respectively 
 * 
 */
const firstDay = new Date (firstHolidayTimestamp).getDate()
const firstMonth = new Date (firstHolidayTimestamp).getMonth() +1
const lastDay = new Date (lastHolidayTimestamp).getDate()
const lastMonth = new Date (lastHolidayTimestamp).getMonth() +1

console.log('')

/**
 * to have two charecter date and month using padStar, they have to be passed to string first
 */
const firstDayString = firstDay.toString()
const firstMonthString = firstMonth.toString()

/**
 * Interpolation is introduced to log  the minimum and maximum date
 */

console.log(`${firstDayString.padStart(2, '0')}/${firstMonthString.padStart(2, '0')}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

console.log('')

/**
 * This code will get a random holiday from holidays object everytime the console is
 * refreshed
 */
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length)
const randomHoliday = holidays[randomIndex].name
console.log(randomHoliday)