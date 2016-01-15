
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
  this.cupsToLbs = 0;
  this.totalLbs = 0;
  this.totalCust = 0;
  this.generateHourlyCust = function() {
    for(var i = 0; i < timeOfDay.length; i++) {
      var randCust = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr) + this.minCustHr);
      this.hourlyCust.push(randCust);
    };
  }
  this.generateHourlyCups = function() {
    for(var j = 0; j < timeOfDay.length; j++) {
      var cups = this.hourlyCust[j] * this.aveCupsCust;
      //  console.log(parseFloat(cups.toFixed(1)));
       this.hourlyCups.push(cups);
      //  this.dailyCups.push(aveCupsCust);
    // this.allDailyBeans[i] =+ Number((cups / 20).toFixed(2));
      this.allDailyBeans += cups / 20;
    };
  }
  this.generateHourlyBeans = function() {
    for(var i = 0; i < timeOfDay.length; i++) {
      var beans = this.hourlyCust[i] * this.aveLbsCust;
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
        tdEl.textContent = (this.hourlyBeans[i] + this.hourlyCups[i] / 20).toFixed(2);
        trEl.appendChild(tdEl);
      }

      tdEl = document.createElement('td');
      tdEl.textContent = this.dailyBeans;
      trEl.appendChild(tdEl);
      tblEl.appendChild(trEl);

    }


  }
    var sectEl = document.getElementById('test');

    var tblEl = document.createElement('table');
      // var tblEl = document.getElementsByClassName('you');
    var trEl = document.createElement('tr');
      // trEl = document.getElementsByClassName('hot');
    var thEl = document.createElement('th');
    thEl.textContent = 'Store';
    trEl.appendChild(thEl);

    for(var i = 0; i < timeOfDay.length; i++) {
      var tdEl = document.createElement('th');
      tdEl.textContent = timeOfDay[i];
      trEl.appendChild(tdEl);
}
    tdEl = document.createElement('th');
      // tdEl.className = 'for'
    tdEl.textContent = 'Total';
    trEl.appendChild(tdEl);
    tblEl.appendChild(trEl);


  var pke = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
  var cap = new Store('Capitol Hill',32 ,48, 3.2, 0.4);
  var spl = new Store('Seattle Public Library',49, 75, 2.6, 0.2);
  var slu = new Store('South Lake Union',35, 88, 1.3, 3.7);
  var sta = new Store('Sea-Tac Airport',68, 124, 1.1, 2.7);
  var web = new Store('Website Sales',3, 6, 0, 6.7);

pke.render();
cap.render();
spl.render();
slu.render();
sta.render();
web.render();

  sectEl.appendChild(tblEl);
//form
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
  // console.log(kiosks);

  var newStore = new Store(name, minCustHour, maxCustHr, aveCupsCust, aveLbsCust);

  formData.push(newStore);
  formData.render();

  event.target.newShopName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.aveCups.value = null;
  event.target.aveLbs.value = null;

  }

  // event listener for 'add store button'
  newStoreForm.addEventListener('comment-button', addNewStores);
//
