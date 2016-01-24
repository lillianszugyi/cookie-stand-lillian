var openHours = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function random(maxCustomer, minCustomer) {
  return Math.random() * (maxCustomer - minCustomer) + minCustomer;
}

function cookiesPerHour(maxCustomer, minCustomer, avgCookies) {
  return random(maxCustomer, minCustomer) * avgCookies;
}

function Store (maxCustomer, minCustomer, avgCookies) {
  this.maxCustomer = maxCustomer;
  this.minCustomer = minCustomer;
  this.avgCookies = avgCookies;
  this.cookiesArr = [];

  for (var i = 0; i < openHours.length; i++) {
    var hourlyCookies = cookiesPerHour(this.maxCustomer, this.minCustomer, this.avgCookies);
    this.cookiesArr.push(hourlyCookies);
  };
}

var pikePlace = new Store (17, 88, 5.2);
var seatacAirport = new Store (6, 24, 1.2);
var southcenter = new Store (11, 38, 1.9);
var bellevueSquare = new Store (20, 48, 3.3);
var alki = new Store (3, 24, 2.6);

// Display the values of each array as unordered lists in the browser.
pikePlace.cookiesArr


// Display the lists on index.html. We will be adding features to this application and working with its layout throughout the week.
