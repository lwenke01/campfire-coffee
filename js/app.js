
"use strict";

var timeOfDay = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00  pm','5:00 pm','6:00 pm','7:00 pm', '8:00 pm']
var kiosks = [];
var tbl;

function Store(name, minCustHour, maxCustHr, aveCupsCust, aveLbsCust) {
  this.name = name;
  this.minCustHr = minCustHour;
  this.maxCustHr = maxCustHr;
  this.aveCupsCust = aveCupsCust;
  this.aveLbsCust = aveLbsCust;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.dailyCups = 0;
  this.allDailyBeans = 0
  this.hourlyBeans = [];
  this.dailyBeans= 0;
  this.cupsToLbs = [];
  this.totalLbs = [];
  this.totalCust = [];
  this.generateHourlyCust = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
      this.hourlyCust.push(Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr).toFixed(0));
    };
  }
  this.generateHourlyCups = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
      var cups = Number((this.hourlyCust[i] * this.aveCupsCust).toFixed(2));
      //  console.log(parseFloat(cups.toFixed(1)));
       this.hourlyCups.push(cups);
       this.dailyCups += aveCupsCust;
    // this.allDailyBeans[i] =+ Number((cups / 20).toFixed(2));
      this.allDailyBeans += cups / 20;
    };
  }
  this.generateHourlyBeans = function() {
    for(var i = 0; i > timeOfDay.length; i++) {
      var beans = (this.hourlyCust[i] * this.aveLbsCust).toFixed(2);
      this.hourlyBeans.push(beans);
      this.dailyBeans += beans;
    };
  }

    this.render =  function() {
      this.generateHourlyCust();
      this.generateHourlyCups();
      this.generateHourlyBeans();

      var trEl = document.createElement('tr');
      tdEl = document.createElement('th');
      tdEl.textContent = this.name;
      trEl.appendChild(tdEl);
      for(var i = 0; i < timeOfDay.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = Number((this.allDailyBeans[i]+this.dailyBeans[i]).toFixed(2));
        trEl.appendChild(tdEl);
      }

      tdEl = document.createElement('td');
      tdEl.textContent = this.totalLbs;
      trEl.appendChild(tdEl);
      tblEl.appendChild(trEl);

    }
    this.render();

  }
    var sectEl = document.getElementById('test');
    var tblEl = document.createElement('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Store';
    trEl.appendChild(thEl);
    for(var i = 0; i < timeOfDay.length; i++){
      var tdEl = document.createElement('th');
      tdEl.textContent = timeOfDay[i];
      trEl.appendChild(tdEl);
}
    tdEl = document.createElement('th');
    tdEl.textContent = 'Total';
    trEl.appendChild(tdEl);
    tblEl.appendChild(trEl);


  var pke = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
  var cap = new Store('Capitol Hill',32 ,48, 3.2, 0.4);
  var spl = new Store('Seattle Public Library',49, 75, 2.6, 0.2);
  var slu = new Store('South Lake Union',35, 88, 1.3, 3.7);
  var sta = new Store('Sea-Tac Airport',68, 124, 1.1, 2.7);
  var web = new Store('Website Sales',3, 6, 0, 6.7);


  sectEl.appendChild(tblEl);
  // sectEl.appendChild(tblEl);
// store[i].render();
// pke.generateTotalLbs();
// cap.generateTotalLbs();
// spl.generateTotalLbs();
// slu.generateTotalLbs();
// sta.generateTotalLbs();
// web.generateTotalLbs();

// Method to render new row into table with data from corresponding object, yo.
// DonutShop.prototype.render = function() {
//   var getTable = document.getElementById('donutShops');
//   var newRow = document.createElement('tr');
//   newRow.id=this.locationName;
//   newRow.innerHTML= this.locationName;
//   getTable.appendChild(newRow);
//   this.calculateDailyDonuts();
//
//   for (var i = 0; i < 12; i++) {
//     var newCell = document.createElement('td');
//     newCell.innerHTML = this.hourlyTotals[i];
//     newRow.appendChild(newCell);
//   }
//
//   var newCell = document.createElement('td');
//   newCell.innerHTML = this.dailyTotals;
//   newRow.appendChild(newCell);
//
// };
