"use strict";

var timeOfDay = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00  pm','5:00 pm','6:00 pm','7:00 pm', '8:00 pm']
// var kiosks = [pke, cap, spl, slu, sta, web];

function CoffeeShop(location, minCust, maxCust, aveCups, aveBeans) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCups = aveCups;
  this.aveBeans = aveBeans;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.hourlyBeans = [];
  // this.dailyCups = 0;
  // this.dailyBeans= 0;
  // this.allDailyBeans = 0
  this.total = 0;
  // this.newStore();
  // kiosks.push(this);
  this.renderShopRow();

//get random customer number array
  CoffeeShop.prototype.generateRandCust = function() {
  // this.generateHourlyCust = function() {
    for(var i = 0; i < timeOfDay.length; i++) {
      var randCust = Math.floor((Math.random()) * (this.maxCust - this.minCust) + this.minCust);
      this.hourlyCust.push(randCust);

    };
  }

  //get hourlyCups array
  CoffeeShop.prototype.generateHourlyCups = function() {
    for(var j = 0; j < timeOfDay.length; j++) {
      var cups = this.hourlyCust[j] * this.aveCups;
      //  console.log(parseFloat(cups.toFixed(1)));
       this.hourlyCups.push(cups);
      //  this.dailyCups.push(aveCupsCust);
    // this.allDailyBeans[i] =+ Number((cups / 20).toFixed(2));
      // this.total += cups / 20;
    };
  }
//get beans
  CoffeeShop.prototype.generateHourlyBeans = function() {
    for(var i = 0; i < timeOfDay.length; i++) {
      var beans = this.hourlyCust[i] * this.aveBeans;
      this.hourlyBeans.push(beans);
      // this.total += beans;
    };
  }
  CoffeeShop.prototype.generateTotal = function() {
   return this.total += (cups /20) + beans;

 }
    // this.render =  function() {
    //   this.generateHourlyCust();
    //   this.generateHourlyCups();
    //   this.generateHourlyBeans();

// data
coffeeShop.prototype.renderShopRow = function() {
  this.generateTotal();
  var tableEl = document.getElementById('tableData');

  var trEl = document.createElement('tr');
  var thEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = 'Total';
   trEl.appendChild(tdEl2);

  // var tdEl2 = document.createElement('td');
  //     tdEl.textContent = this.total;
  //     trEl.appendChild(tdEl2);
//hour
  for(var i = 0; i < timeOfDay.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.timeOfDay[i];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
}

// headers
  function renderHeaderRow() {
    var tableEl = document.getElementById('tableData');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'location';
    thEL.appendChild(trEl);

    var thEl2 = document.createElement('th');
    thEl2.textContent = 'total';
    thEl2.appendChild(trEl);

  for(var i = 0; i < timeOfDay.length; i++) {;
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  tableDataEl.appendChild(trEl);
}
  renderHeaderRow();
//   var tdElem = document.createElement('td');
//       tdEl.textContent = this.total;
//       trEl.appendChild(tdElem);
//
//       tblEl.appendChild(trEl);
//
//
//       function renderHeaderRow() {
//     }
//       tblEl.appendChild(trEl);
//
//     };
//
//     renderHeaderRow();
//
//
//   }
//     var sectEl = document.getElementById('test');
//
//     var tblEl = document.createElement('table');
//       // var tblEl = document.getElementsByClassName('you');
//     var trEl = document.createElement('tr');
//       // trEl = document.getElementsByClassName('hot');
//     var thEl = document.createElement('th');
//     thEl.textContent = 'Store';
//     trEl.appendChild(thEl);
//
//     for(var i = 0; i < timeOfDay.length; i++) {
//       var tdEl = document.createElement('th');
//       tdEl.textContent = timeOfDay[i];
//       trEl.appendChild(tdEl);
// }
//     tdEl = document.createElement('th');
//       // tdEl.className = 'for'
//     tdEl.textContent = 'Total';
//     trEl.appendChild(tdEl);
//     tblEl.appendChild(trEl);


  var pke = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
  var cap = new Store('Capitol Hill',32 ,48, 3.2, 0.4);
  var spl = new Store('Seattle Public Library',49, 75, 2.6, 0.2);
  var slu = new Store('South Lake Union',35, 88, 1.3, 3.7);
  var sta = new Store('Sea-Tac Airport',68, 124, 1.1, 2.7);
  var web = new Store('Website Sales',3, 6, 0, 6.7);

// pke.render();
// cap.render();
// spl.render();
// slu.render();
// sta.render();
// web.render();
//
//   sectEl.appendChild(tblEl);


//#form

// function renderNewLine();
  var renderNewRow = document.getElementById('add-new-stores');
  var formData = [];
  //define event handler

  function addNewLocation (event) {
    console.log(event);
    event.preventDefault();


  var location= event.target.newShopName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var aveCupsCust = parseInt(event.target.aveCups.value);
  var aveLbsCust = parseInt(event.target.aveLbs.value);
  // console.log(kiosks);

  var newStore = new Store(name, +minCust, +maxCust, +aveCups, aveBeans);

  // formData.push(newStore);
  // formData.render();
  //
  // event.target.newShopName.value = null;
  // event.target.minCust.value = null;
  // event.target.maxCust.value = null;
  // event.target.aveCups.value = null;
  // event.target.aveLbs.value = null;



  // }
  //
  // // event listener for 'add store button'
  newStoreForm.addEventListener('comment-button', addNewStores);
//
