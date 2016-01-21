var openHours = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"];

var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookies: 5.2,
  cookieArr: []
  }

pikePlace.random = function(minCustomer, maxCustomer) {
  return Math.random() * (maxCustomer - minCustomer) + minCustomer;
}
  console.log(pikePlace.random(pikePlace.minCustomer, pikePlace.maxCustomer));

pikePlace.cookieArr.push(pikePlace.random(pikePlace.minCustomer, pikePlace.maxCustomer) * pikePlace.avgCookies);
  console.log(pikePlace.cookieArr);




//Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated





// var seatacAirport = {
//   minCustomer: 6,
//   maxCustomer: 24,
//   avgCookies: 1.2,
//   }
//
// var southcenter = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookies: 1.9,
//   }
//
// var bellevueSquare = {
//   minCustomer: 20,
//   maxCustomer: 48,
//   avgCookies: 3.3,
//   }
//
// var alki = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookies: 2.6,
//   }
