var storeHours = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function random(maxCustomer, minCustomer) {
  return Math.random() * (maxCustomer - minCustomer) + minCustomer;
}

function cookiesPerHour(maxCustomer, minCustomer, avgCookies) {
  return Math.floor(random(maxCustomer, minCustomer) * avgCookies);
}

function Store (name, maxCustomer, minCustomer, avgCookies) {
  this.name = name;
  this.maxCustomer = maxCustomer;
  this.minCustomer = minCustomer;
  this.avgCookies = avgCookies;
  this.cookiesArr = [];

  for (var i = 0; i < storeHours.length; i++) {
    var hourlyCookies = cookiesPerHour(this.maxCustomer, this.minCustomer, this.avgCookies);
    this.cookiesArr.push(hourlyCookies);
  }
}

var pikePlace = new Store ("Pike Place Market", 17, 88, 5.2);
var seatacAirport = new Store ("Seatac Airport", 6, 24, 1.2);
var southcenter = new Store ("Southcenter", 11, 38, 1.9);
var bellevueSquare = new Store ("Bellevue Square", 20, 48, 3.3);
var alki = new Store ("Alki", 3, 24, 2.6);

function writeSalesProjection(store, elementId) {
  var totalCookies = 0;
  var content = "<th scope='row'>" + store.name + "</th>";

  for (var i = 0; i < storeHours.length; i++) {
    content += "<td>" + store.cookiesArr[i] + "</td>";
    totalCookies = totalCookies + store.cookiesArr[i];
  }

  content += "<th scope='row'>" + totalCookies + "</th>";

  var elStore = document.getElementById(elementId);
  elStore.innerHTML = content;

}

function writeStoreHours(elementId) {
  var hours = "<th></th>";
    for (var i = 0; i < storeHours.length; i++) {
      hours += "<th>" + storeHours[i] + "</th>";
    }
    hours += "<th>Daily Totals</th>"

    var elHours = document.getElementById(elementId);
    elHours.innerHTML = hours;
}

writeStoreHours("hours");
writeSalesProjection(pikePlace, "pikePlace");
writeSalesProjection(seatacAirport, "seatacAirport");
writeSalesProjection(southcenter, "southcenter");
writeSalesProjection(bellevueSquare, "bellevueSquare");
writeSalesProjection(alki, "alki");
