// Query selector lets you find the first element that matches the CSS selector/HTML elements you specify.

const order1 = document.querySelector('[data-key="order1"]'), //variable names are invalid
    order1Biscuits = order1.querySelector ('.biscuits .count'),
    order1Donuts = order1.querySelector('.donuts .count'),
    order1Pancakes = order1.querySelector('.pancakes .count'),
    order1Status = order1.querySelector('.status dd');

const order2 = document.querySelector('[data-key="order2"]'),
    order2Biscuits = order2.querySelector('.biscuits .count'),
    order2Donuts = order2.querySelector('.donuts .count'),
    order2Pancakes = order2.querySelector('.pancakes .count'),
    order2Status = order2.querySelector('.status dd');

 const order3 = document.querySelector('[data-key="order3"]'),
    order3Biscuits = order3.querySelector('.biscuits .count'),
    order3Donuts = order3.querySelector('.donuts .count'),
    order3Pancakes = order3.querySelector('.pancakes .count'),
    order3Status = order3.querySelector('.status dd');

order1Biscuits.textContent = order1.getAttribute('data-biscuits');
order1Donuts.textContent = order1.getAttribute('data-donuts');
order1Pancakes.textContent = order1.getAttribute('data-pancakes');
order1Status.textContent = order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

order2Biscuits.textContent = order2.getAttribute('data-biscuits');
order2Donuts.textContent = order2.getAttribute('data-donuts');
order2Pancakes.textContent = order2.getAttribute('data-pancakes');
order2Status.textContent = order2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

order3Biscuits.textContent = order3.getAttribute('data-biscuits');
order3Donuts.textContent = order3.getAttribute('data-donuts');
order3Pancakes.textContent = order3.getAttribute('data-pancakes');
order3Status.textContent = order3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';