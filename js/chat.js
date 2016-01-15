"use strict";


//DOM set-up
var newStoreForm = document.getElementById('add-new-stores');
var formData = [];
//define event handler
function addNewStores(event) {
  console.log(event);
  event.preventDefault();


var name = event.target.newShopName.value;
var minCustHour = parseInt(event.target.minCust.value);
var maxCustHr = parseInt(event.target.maxCust.value);
var aveCupsCust = parseInt(event.target.aveCups.value);
var aveLbsCust = parseInt(event.target.aveLbs.value);
console.log(kiosks);

var newStore = new Store(name, minCustHour, maxCustHr, aveCupsCust, aveLbsCust);

formData.push(newStore);
newStore.render();

event.target.newShopName.value = null;
event.target.minCust.value = null;
event.target.maxCust.value = null;
event.target.aveCups.value = null;
event.target.aveLbs.value = null;

}

// event listener for 'add store button'
newStoreForm.addEventListener('comment-button', addNewStores);
