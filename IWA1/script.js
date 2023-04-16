

const MIN_NUMBER = -5
const MAX_NUMBER = 15

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

let count = 0;

const subtractHandler = () => {
   if (count > MIN_NUMBER) {
      count--;
      number.value = count;
   }

   if (count === MIN_NUMBER) {
      subtract.disabled = true;
   }

   if (add.disabled === true) {
      add.disabled = false;
   }

   const footer = document.querySelector('.footer');
   footer.innerHTML = 'current count: <span>${count}</span>';
};

   const addHandler = () => {
      if (count < MAX_NUMBER) {
         count++;
         number.value = count;
      }

      if (count === MAX_NUMBER) {
         add.disabled = true;
      }

      if (subtract.disabled === true) {
         subtract.disabled = false;
      }

      const footer = document.querySelector('.footer');
      footer.innerHTML = 'current count: <span>${count}</span>';
   };


/*const updateNumberValue = (value) => {
   number.value = value;
};

const updateButtonState = (button, isDisabled) => {
};

const subtractHandler = () => {
   const currentValue = parseInt(number.value); 
   if (currentValue <= MIN_NUMBER) {
      return;
   }

   const newValue = currentValue - 1;
   updateNumberValue(newValue);
   
   updateButtonState (add, false);
   updateButtonState (subtract, newValue <= MIN_NUMBER);
};

const addHandler = () => {
   const currentValue = parseInt(number.value);

   if (currentValue >= MAX_NUMBER) {
      return;
   }

   const newValue = currentValue + 1;
   updateNumberValue(newValue);

   updateButtonState.ButtonState(subtract, false);
   updateButtonState(add, newValue >= MAX_NUMBER);
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);

   /*number.value = newValue

   if (add.disabled === true) {
    add.disabled = false
   }
  
   if (newValue <= MIN_NUMBER) {
      subtract.disabled = true
 }
}
const addtHandler = () => {
   const newValue = parseInt(number.value) + 1
   number.value = newValue

   if (subtract.disabled === true) {
   subtract.disabled = false
}
}


subtract.addEventListener(click, subtractHandler )

add.addEventListener(click, addtHandler)*/
