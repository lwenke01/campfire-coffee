"use strict";


//DOM set-up
var newStoreForm = document.getElementById('add-new-stores');

//define event handler
function addNewStores(event) {
  console.log(event);
  event.preventDefault();
}

var newStoreSetup = new Store(event.target.newShopName.value, Number(event.target.minCustHr.value), Number(event.target.maxCustHr.value), Number(event.target.aveCupsCust.value),
Number(event.target.aveLbsCust.value));
console.log('new location has been created :' + event.target.newShopName.value);
console.log(kiosks);


event.target.newShopName.value = null;
event.target.minCust.value = null;
event.target.maxCust.value = null;
event.target.aveCups.value = null;
event.target.aveLbs.value = null;
table_spot.innerHTML = '';
displayForecast();
}

// event listener for 'add store button'
NewStoreForm.addEventListener('comment-button', addNewStores);
//
