var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookies: 5.2,
  }

pikePlace.random = function(minCustomer, maxCustomer) {
  return Math.random() * (maxCustomer - minCustomer) + minCustomer;
}
console.log(pikePlace.random(pikePlace.minCustomer, pikePlace.maxCustomer));

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

// //CLASS NOTES FOR REFERENCE//
//
//   // Basic object literal with properties and one method (method commented out as an example only)
//   var turtle = {
//     color: 'Blue',
//     legs: 4,
//     ninja: true,
//     hunger: 4,
//     // eat: function(isHungry) {
//     //   if (isHungry > 5) {
//     //     console.log('Get me some of dat pizza!');
//     //   } else if (isHungry <= 5) {
//     //     console.log('I\'m full Brah');
//     //   }
//     // }
//   };
//   console.log(turtle);
//
//   // This will not work; we have to assign/reassign a new method to the object property
//   // function turtle.eat() {
//   //   // do some code
//   // }
//
//   turtle.eat = function(isHungry) {
//     if (isHungry > 5) {
//       console.log('Get me some of dat pizza!');
//     } else if (isHungry <= 5) {
//       console.log('I\'m full Brah');
//     }
//   }; // Declare your methods outside the object to keep them clear and concise
//
//   turtle.getColor = function() {
//     return this.color;
//   };
//
//   turtle.randomHunger = function(min, max) {
//     return Math.random() * (max - min) + min;
//   };  // e.g.  turtle.hunger = turtle.randomHunger(0, 50);
//
//   // Quick review of when to use semi-colons
//   // function beans() {
//   //   // Do some code
//   // }
//   //
//   // var beans = function() {
//   //   // Do some code
//   // };
//
//   // This is a basic create html and render to page example
//   // var sectionEl = document.getElementById('myList');
//   // sectionEl.textContent = 'Hello World!';
//   //
//   // var ulEl = document.createElement('ul');
//   // var liEl = document.createElement('li');
//   // liEl.textContent = 'I like grapes.';
//   //
//   // ulEl.appendChild(liEl);
//   // // target.appendChild(content)   (common syntax example for a method such as appendChild)
//   //
//   // sectionEl.appendChild(ulEl);
//
//
//   // This is a more advanced for loop inside for loop for nested lists
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   var weeks = [1, 2, 3, 4];
//   var sectionEl = document.getElementById('myList');
//   var ulEl = document.createElement('ul');
//
//   for(month in months) {
//     var liEl = document.createElement('li');
//     liEl.textContent = months[month];
//     var nestedUlEl = document.createElement('ul');
//
//     for(week in weeks) {
//       var nestedLiEl = document.createElement('li');
//       nestedLiEl.textContent = weeks[week];
//       nestedUlEl.appendChild(nestedLiEl);
//     }
//
//     liEl.appendChild(nestedUlEl);
//     ulEl.appendChild(liEl);
//   }
//
//   sectionEl.appendChild(ulEl);
