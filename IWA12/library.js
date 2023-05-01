const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
/*
function setStatusProperties(bookId, status) {
    const book = document.querySelector(`#${bookId}`);
    const statusElement = book.querySelector('.status');
    const reserveButton = book.querySelector('.reserve');
    const checkoutButton = book.querySelector('.checkout');
    const checkinButton = book.querySelector('checkin');

    statusElement.style.color = 
    reserveButton.diabled = !STATUS_MAP[status].canReserve;
    checkoutButton.disabled = !STATUS_MAP[status].canCheckout;
    checkinButton.disabled = !STATUS_MAP[status].canCheckin;

    reserveButton.style.filter = "grayscale(100%)";
    checkoutButton.style.filter = "grayscale(100%)";
    checkinButton.style.filter = "grayscale(100%)";
};*/



const book1 = document.querySelector('#book1');
const book2 = document.querySelector('#book2');
const book3 = document.querySelector('#book3');

const reserve1 = book1.querySelector('.reserve');
const checkout1 = book1.querySelector('.checkout');
const checkin1 = book1.querySelector('.checkin');
const status1 = book1.querySelector('.status');

const reserve2 = book2.querySelector('.reserve');
const checkout2 = book2.querySelector('.checkout');
const checkin2 = book2.querySelector('.checkin');
const status2 = book2.querySelector('.status');

const reserve3 = book3.querySelector('.reserve');
const checkout3 = book3.querySelector('.checkout');
const checkin3 = book3.querySelector('.checkin');
const status3 = book3.querySelector('.status');

function setStatusProperties(_book, reserve, checkout, checkin, status) {
    const bookStatus = status.textContent.tolowerCase();


    status.style.color = !STATUS_MAP[bookStatus].color


    reserve.disabled = !STATUS_MAP[bookStatus].canReserve;
    checkout.disabled = !STATUS_MAP[bookStatus].canCheckOut;
    checkin.disabled = !STATUS_MAP[bookStatus].canCheckIn;
    if (!checkin.disabled) {
        checkin.style.color = '';
    
    }

};

setStatusProperties(book1, reserve1, checkout1, checkin1, status1);
setStatusProperties(book2, reserve2, checkout2, checkin2, status2);
setStatusProperties(book3, reserve3, checkout3, checkin3, status3);



/**status = selector(status)
 
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
*/