// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  /**
   * Define an arrow function "createhtml" that takes "athlete" parameter.
   * Extract properties and values from the "data" object based on the provided "athlete" parameter
   * It retrieves  the firstName, surname, id, and races count for the athlete. 
   * It also retrieves the date of the latest race for that athlete.
   * @param {*} athlete 
   * @returns 
   */

  const createHtml = (athlete) => {
  const firstName = data.response.data[athlete].firstName;
  const surname = data.response.data[athlete].surname;
  const id = data.response.data[athlete].id;
  const races = (data.response.data[athlete].races).length;
  const date = new Date(data.response.data[athlete].races[races-1].date)
   
  
 const fragment = document.createDocumentFragment(); //Create a document fragment. This is a container for storing HTML elements.
  
 /**
  * Create an <h2> element and set its text content to the athlete's id. 
  * Then add the <h2> element to the document fragment. using .appendChild().
  */

 let title = document.createElement('h2');
    title.textContent = id;
    fragment.appendChild(title);
  
    const list = document.createElement('dl'); // Create a "deifnistionl list" which contains athletes' information.
 
/**
 * Extract the day, month, and year from the date object.
 * Use the getDate(), getMonth(), and getFullYear() methods, respectively.
 */
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
  
/**
 * Calculate the sum of the time values for the latest race of the athlete. 
 * Retrieve the time array for the latest race and iterates over it, adding each value to the "sum" variable.
 */
  
  const time = data.response.data[athlete].races[races-1].time
  let sum = 0;
  let i = 0;

  while ( i < time.length) {
    sum += time[i] 
    i++
  }

/**
 * calculate the hours and minutes from the sum value. 
 * The Math.floor() function is used to get the whole number of hours, and the remainder after dividing by 60 gives the minutes.
 */
    const hours = Math.floor(sum / 60);
    const minutes = sum % 60;
    
  /**
   * Set the innerHTML of the 'list" element.
   * It creates a definition list with four <dt> (definition term) elements.
   * The ${variable} syntax is used to interpolate the values of firstName, surname, races, day, month, year, hours, and minutes into the HTML template.
   */
    list.innerHTML = /* html */ 
    `
      <dt>Athlete: ${firstName} ${surname}</dt>
  
      <dt>Total Races: ${races}</dt>
  
      <dt>Event Date (Latest): ${day.toString().padStart(2, '0')} ${month} ${year} </dt>
      
  
      <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}</dt>
      `
    ;
  
    fragment.appendChild(list);

    return fragment;
  }
  
   document.querySelector('[data-athlete="NM372"]').appendChild(createHtml('NM372'));
   document.querySelector('[data-athlete="SV782"]').appendChild(createHtml('SV782'));
  