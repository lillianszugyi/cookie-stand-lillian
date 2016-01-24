var openHours = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"];

var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookies: 5.2,
  cookiesPerHour: []
}

pikePlace.random = function(minCustomer, maxCustomer) {
  return Math.random() * (maxCustomer - minCustomer) + minCustomer;
}
console.log(pikePlace.random(pikePlace.minCustomer, pikePlace.maxCustomer));

pikePlace.cookiesPerHour = function() {
  return this.random(this.minCustomer, this.maxCustomer) * this.avgCookies;
}
console.log(pikePlace.cookiesPerHour());


// pikePlace.cookieArr.push(pikePlace.random(pikePlace.minCustomer, pikePlace.maxCustomer) * pikePlace.avgCookies);
// console.log(pikePlace.cookieArr);

// Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated


// Store the results for each location in a separate array
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:
//
// Pike Place Market
//
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// Total: 657 cookies
// Display the lists on index.html. We will be adding features to this application and working with its layout throughout the week.


// var seatacAirport = {
//   minCustomer: 6,
//   maxCustomer: 24,
//   avgCookies: 1.2
//   }
//
// var southcenter = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookies: 1.9
//   }
//
// var bellevueSquare = {
//   minCustomer: 20,
//   maxCustomer: 48,
//   avgCookies: 3.3
//   }
//
// var alki = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookies: 2.6
//   }
