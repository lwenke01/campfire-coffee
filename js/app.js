
"use strict";

var timeOfDay = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00  pm','5:00 pm','6:00 pm','7:00 pm', '8:00 pm']

//html


function Store(name, minCustHour, maxCustHr, aveCupsCust, aveLbsCust) {
  this.name = name;
  this.minCustHr = minCustHour;
  this.maxCustHr = maxCustHr;
  this.aveCupsCust = aveCupsCust;
  this.aveLbsCust = aveLbsCust;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.hourlyLbs = [];
  this.cupsToLbs = [];
  this.totalLbs = [];
  this.totalCust = [];

  this.generateHourlyCust = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
    hourlyCust.push(Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr));
    }
  };
  this.generateHourlyCups = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
    this.hourlyCups.push(Math.floor(this.aveCupsCust * this.hourlyCust));
    }
  };
  this.generateHourlyLbs = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
    this.hourlyLbs.push(Math.floor(this.aveLbsCust * this.hourlyCust));
    }
  };
  this.generateCupsToLbs = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
    this.cupsToLbs.push(Math.floor(this.cups / 20));
    }
  };
  this.generateTotalLbs = function() {
    this.totalLbs.push(Math.floor(this.cupsToLbs + this.lbs));

  };
}
  this.render = function() {
      this.generateHourlyCust.push();
      this.generateHourlyCups.push();
      this.generateHourlylbs.push();
      this.timeOfDay.push();
};

var pke = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
var cap = new Store('Capitol Hill',32 ,48, 3.2, 0.4);
var spl = new Store('Seattle Public Library',49, 75, 2.6, 0.2);
var slu = new Store('South Lake Union',35, 88, 1.3, 3.7);
var sta = new Store('Sea-Tac Airport',68, 124, 1.1, 2.7);
var web = new Store('Website Sales',3, 6, 0, 6.7);

// pke.render();
function renderHour() {

  var sectEl = document.getElementById('test');
  var tblEL = document.createElement('table');
  var trEl = document.createElement('tr');
  var h1El = document.createElement('h1');
  var thEl = document.createElement('th');
for var(i = 0; i < timeOfDay.length; i++) {
  thEl.textContent = timeOfDay[i];
  trEl.appendChild(thEl);
  };
}



//
// var h1ElSpl = document.createElement('h1');
// h1ElSpl.textContent = 'Seattle Public Library';
// document.body.appendChild(h1ElSpl);
//
// var ulEl = document.createElement('li');
//   ulEl.textContent = timeOfDay[i] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
//   document.body.appendChild(ulEl);
//
// var h1ElSpl = document.createElement('h1');
// h1ElSpl.textContent = 'Seattle Public Library';
// document.body.appendChild(h1ElSpl);
//
//
// // Loop through the months array, one index at a time
// for (var i = 0; i < timeOfDay.length; i++) {
//   // For each iteration of the loop; Create an LI element <li></li>
//   var tdEl = document.createElement('td');
//   // For each LI element; Assign the contents of the array[i] to the LI's text content
//   tdEl.textContent = timeOfDay[i];
//
//   trEl.appendChild(tdEl);
//
// h1El.textContent = Store;
// document.body.appendChild(h1El);
//   };
