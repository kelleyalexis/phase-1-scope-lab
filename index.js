var customerName = 'bob'

function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
    console.log(customerName);
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

var overwriteCustomer = bestCustomer
function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'linda'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not linda';
}

