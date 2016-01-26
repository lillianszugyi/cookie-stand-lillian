var storeHours = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var totalCookies = 0;

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
  var content = "<h3>" + store.name + "</h3><ul>";

  for (var i = 0; i < storeHours.length; i++) {
    content += "<li>" + storeHours[i] + ": " + store.cookiesArr[i] + "</li>";
    totalCookies = totalCookies + store.cookiesArr[i]
  }

  content += "<p class =\"total\">Total: " + totalCookies + " Cookies Needed Per Day</p></ul><hr>";

  var elStore = document.getElementById(elementId);
  elStore.innerHTML = content;
}

writeSalesProjection(pikePlace, "pikePlace");
writeSalesProjection(seatacAirport, "seatacAirport");
writeSalesProjection(southcenter, "southcenter");
writeSalesProjection(bellevueSquare, "bellevueSquare");
writeSalesProjection(alki, "alki");
