// scripts.js

//This const variable defines an array "Months" that contains string names of months in a year. 
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

/**
 * define a function getDaysInMonth that takes a "date" parameter and returns the number of days in the month of that date. 
 * It uses the getFullYear() method to get the year, getMonth() method to get the month (0-11), and creates a new date object with the next month and day 0. 
 * The getDate() method is then used to retrieve the last day of the current month, effectively giving the number of days in that month.
 * @param {*} date 
 * @returns days
 */

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()


// Only edit below 

/**
 * Define a function createArray that takes a length parameter.
 * Inside the function, it initializes an empty array called "result".
 * Then it uses a for loop to iterate from 0 to length - 1, pushing each index value into the result array.
 * Finally, it returns the result array.
 * @param {*} length 
 * @returns 
 */

const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(i);
    }

    return result;
}

/**
 * defines a function expression createData without any parameters. 
 * Inside the function, it creates a new Date object called current representing the current date. 
 * It then sets the day of the month to 1 using current.setDate(1), effectively setting the date to the first day of the current month. 
 * It obtains the starting day of the month using current.getDay(), which returns a value from 0 (Sunday) to 6 (Saturday).
 * The number of days in the month is obtained using the getDaysInMonth function defined earlier.
 * It creates two arrays: weeks with a length of 6 and days with a length of 7. Then, it enters a nested for loop to iterate over the weeks and days. 
 * It calculates the day of the month for each cell based on the current week and day index, the starting day, and the number of days in the month. 
 * It creates a value object with properties week and days, and pushes objects representing each day of the week into the value.days array. 
 * Finally, it returns the weeks array.
 * @returns weeks
 */

const createData = function () {
    const current = new Date(); 
    current.setDate(1);     //sets the first day of the month in milliseconds
    const startDay = current.getDay(); //gets the first day of the month
    const daysInMonth = getDaysInMonth(current); //gets the days in month
    const weeks = createArray(6); //creates a new array called weeks with a length of 6, where each element in the array contains a number from 0 to 5
    const days = createArray(7); //creates a new array called days with a length of 7, where each element in the array contains a number from 0 to 6
    //let result = [] //value = null
  
  
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      let value = {    //introduced object literal to create a bew object
        week: weekIndex + 1,
        days: []   //contains an empty array
      };

      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        const day = (weekIndex * 7) + dayIndex - startDay + 1;
        const isValid = day > 0 && day <= daysInMonth;
        let classString = 'table_cell';     //A classString variable is also created, which is initialized to table_cell
        if (dayIndex === 0 || dayIndex === 6) {
          classString += 'table_cell_weekend';  //the table_cell_weekend string is appended to the classString If the current dayIndex corresponds to a weekend day
        }
        value.days.push({   // new object is pushed to the days array of the value object
          dayOfWeek: dayIndex + 1,  //The dayOfWeek property is set to the current dayIndex
          value: isValid ? day : '',
          class: classString,
        });
      }
      weeks[weekIndex] = value;  //the object is added to the weeks array at the corresponding index
    }
    return weeks;   //After all weeks have been processed, the weeks array is returned
  };
  
  /**
   * defines a function expression addCell that takes three parameters: existing, classString, and value.
   * Inside the function, it appends an HTML string representing a table cell to the existing string.
   * The class of the cell is set using the classString parameter, and the content of the cell is set using the value parameter. 
   * The resulting HTML string is returned.
   * @param {*} existing 
   * @param {*} classString 
   * @param {*} value 
   * @returns 
   */
  
  const addCell = function (existing, classString, value) {
    return `${existing}
    <td class="${classString}">
    ${value}</td>`;
  };

  /**
   * defines a function expression createHtml that takes a data parameter.
   * Inside the function, it initializes an empty string called result.
   * It then iterates over each week in the data array and creates an empty string called inner for each week.
   * It adds a cell to inner that displays the week number and has a specific class.
   * Then, it loops through each day in the current week, determines the appropriate class for the cell based on whether it is today's date or a weekend day, and adds the cell to inner. 
   * Finally, it concatenates the inner string with a table row HTML string and appends it to the result string. After iterating over all the weeks, it returns the result string.
   * @param {*} data 
   * @returns 
   */

const createHtml = function (data) {
    // Initialize an empty string called `result`
    let result = '';
  
    // Loop through each week in the data array
    for (let i = 0; i < data.length; i++) {
      const week = data[i];
      // Initialize an empty string called `inner`
      let inner = '';
  
      // Add a cell to `inner` that displays the week number and has a specific class
      inner = addCell(inner, 'table_cell table_cell_sidebar', `Week ${week.week}`);

      // Loop through each day in the current week
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];
        // Initialize a string called `classString` with a default value of 'table__cell'
        let classString = 'table__cell';
  /**
   * Creates a new Date object representing the current date and assigns it to the current variable.
   * Check if the current day is today's date.
   * Add a class to `classString` if the current day is today.
   */
    
        const currentDate = new Date();
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
  
        // Check if the current day is a weekend day (Saturday or Sunday)
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        if (isWeekend) {
          // Add a class to `classString` if the current day is a weekend day
          classString = `${classString} table__cell_weekend`;
        }
  
        // Check if the current week is an alternate week (
        inner = addCell(inner, classString, day.value || '');
      }
      result += `<tr>${inner}</tr>`;
    }
    return result;
  };


  


// Only edit above

/**
 * uses document.querySelector to select an element with the attribute data-title and sets its innerText property to the formatted string representing the current month and year. 
 * It uses the getMonth() method of the current date object to get the month index and retrieves the corresponding month name from the MONTHS array.
 * It also uses the getFullYear() method to get the current year.
 */
const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

//calls the createData function to generate the data needed for the calendar.
const data = createData()

/**
 * Used document.querySelector to select an element with the attribute data-content and set its innerHTML property to the HTML generated by the createHtml function using the data generated in the previous step. 
 * This updates the content of the element with the calendar HTML structure.
 */
document.querySelector('[data-content]').innerHTML = createHtml(data)