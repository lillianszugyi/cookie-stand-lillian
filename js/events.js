var storeInput = document.getElementById("store-input").value;
var minInput = document.getElementById("min-input").value;
var maxInput = document.getElementById("max-input").value;
var avgInput = document.getElementById("avg-input").value;
var addButtonInput = document.getElementById("add-button-input").value;

var newStore = new Store (storeInput, minInput, maxInput, avgInput, addButtonInput);


console.log(storeInput);
