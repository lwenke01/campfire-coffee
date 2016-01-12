
"use strict";

var timeOfDay = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00  pm','5:00 pm','6:00 pm','7:00 pm', '8:00 pm']

//stores

//pike place

// function Student(firstName, lastInitial, hairStyle) {
//   this.course = '201d5';
//   this.firstName = firstName;
//   this.lastInitial = lastInitial;
//   this.hairStyle = hairStyle;
//   this.intro = function() {
//     console.log('My name is ' + this.firstName + ' and my last initial is ' + this.lastInitial);
//   }

  function Store(name, minCustHour, maxCustHr, aveCupsCust, aveLbsCust, cupsPerHour,)
  this.name = name;
  this.minCustHr = minCustHour;
  this.maxCustHr = maxCustHr;
  this.cupsPerHour[] = cupsPerHour;
  this.
  this.aveCupsCust = aveCupsCust;
  this.aveLbsCust = aveLbsCust;
  this.randomNum = function() {
    return Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
  };
  this.cups = function() {
    return Math.floor(this.aveCupsCust * this.randomNum);
  };
  this.lbs = function() {
    return Math.floor(this.aveLbsCust * this.randomNum);
  };
  this.cupsToLbs = function() {
    return Math.floor(this.cups / 20);
  };
  this.totalLbs = function() {
    return Math.floor(this.cupsToLbs + this.lbs);
};
  }
// create instances
var pike = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
var

// add a method by modifying the prototype


  // render: function() {
  //   this.hourlyCustomers();
  //   this.generateHourlyCups();
  //   this.generateHourlyBeansByLb();
  //
  //   var ulEl = document.createElement('ul');
  //   ulEl.appendChild(document.createTextNode(this.name));
  //   var sectionEl = document.getElementById('kiosk-data').appendChild(ulEl);
  //
  //   for (var i = 0; i < hours.length; i++) {
  //     var liEl = document.createElement('li');
  //     //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
  //     liEl.textContent = hours[i] + ": " + this.allDailyBeans + ' [' + this.hourlyCust[i] + ' customers, ' + this.dailyCups + ' cups (' + (this.dailyCups / 20) + '), ' + this.dailyBeansByLb + ' lbs to-go]';
  //     ulEl.appendChild(liEl);

Student.prototype.warCry = function() {
  console.log('Woooo!!!!');
}


var h1ElPke = document.createElement('h1');
h1ElPke.textContent = 'Pike Place Market';
document.body.appendChild(h1ElPke);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;

for(var i=0; i < timeOfDay.length; i++) {
var pike = {
  name:'Pike Place Market',
  minCustHr:14,
  maxCustHr:55,
  aveCupsCust:1.2,
  aveLbsCust:3.7,
checkBeans: function() {
  randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
  lbs = Math.floor(this.aveLbsCust * randomNum);
  cupsToLbs = Math.floor(cups / 20);
  totalLbs = Math.floor(cupsToLbs + lbs);
  }
}
//method pike
pike.checkBeans();
var h1ElPke = document.createElement('h1');
h1ElPke.textContent = 'Pike Place Market';
document.body.appendChild(h1ElPke);
var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[i] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
document.body.appendChild(ulEl);
}

//cap Hill store
var h1ElCap = document.createElement('h1');
h1ElCap.textContent = 'Capitol Hill';
document.body.appendChild(h1ElCap);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;
for(var j=0; j < timeOfDay.length; j++) {
var cap = {
  name: 'Capitol Hill',
  minCustHr:32,
  maxCustHr:48,
  aveCupsCust:3.2,
  aveLbsCust:0.4,
//function
  checkBeans: function(){
    randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    cups = Math.floor(this.aveCupsCust * randomNum);

  }
}
//method
cap.checkBeans();
var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[j] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
document.body.appendChild(ulEl);
}
//END

//spl
var h1ElSpl = document.createElement('h1');
h1ElSpl.textContent = 'Seattle Public Library';
document.body.appendChild(h1ElSpl);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;
//loop
for(var k =0; k < timeOfDay.length; k++) {
var spl = {
  name: 'Seattle Public Library',
  minCustHr:49,
  maxCustHr:75,
  aveCupsCust:2.6,
  aveLbsCust:0.2,
//function
  checkBeans: function(){
    randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    cups = Math.floor(this.aveCupsCust * randomNum);
    lbs = Math.floor(this.aveLbsCust * randomNum);
    cupsToLbs = Math.floor(cups / 20);
    totalLbs = Math.floor(cupsToLbs + lbs);
  }
}
//method
spl.checkBeans();
  var ulEl = document.createElement('li');
  ulEl.textContent = timeOfDay[k] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
  document.body.appendChild(ulEl);
}
//END//

//slu
var h1ElSlu = document.createElement('h1');
h1ElSlu.textContent = 'South Lake Union';
document.body.appendChild(h1ElSlu);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;

for(var l =0; l < timeOfDay.length; l++) {
var slu = {
  name: 'South Lake Union',
  minCustHr:35,
  maxCustHr:88,
  aveCupsCust:1.3,
  aveLbsCust:3.7,
  checkBeans: function(){
    randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    cups = Math.floor(this.aveCupsCust * randomNum);
    lbs = Math.floor(this.aveLbsCust * randomNum);
    cupsToLbs = Math.floor(cups / 20);
    totalLbs = Math.floor(cupsToLbs + lbs);
  }
}
  slu.checkBeans();
  var ulEl = document.createElement('li');
  ulEl.textContent = timeOfDay[l] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
  document.body.appendChild(ulEl);
}
//END//

//sta
var h1ElSta = document.createElement('h1');
h1ElSta.textContent = 'Sea-Tac Airport';
document.body.appendChild(h1ElSta);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;

for(var m =0; m < timeOfDay.length; m++) {
var sta = {
name:'Sea-Tac Airport',
minCustHr:68,
maxCustHr:124,
aveCupsCust:1.1,
aveLbsCust:2.7,
checkBeans: function(){
  randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
  cups = Math.floor(this.aveCupsCust * randomNum);
  lbs = Math.floor(this.aveLbsCust * randomNum);
  cupsToLbs = Math.floor(cups / 20);
  totalLbs = Math.floor(cupsToLbs + lbs);
  }
}
sta.checkBeans();
var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[m] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
document.body.appendChild(ulEl);
  }
//END//

//web
var h1ElWeb = document.createElement('h1');
h1ElWeb.textContent = 'Website Sales';
document.body.appendChild(h1ElWeb);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;

for(var n =0; n < timeOfDay.length; n++) {
var web = {
  name:'Website Sales',
  minCustHr:3,
  maxCustHr:6,
  aveCupsCust:0,
  aveLbsCust:6.7,
  checkBeans: function(){
    randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    cups = Math.floor(this.aveCupsCust * randomNum);
    lbs = Math.floor(this.aveLbsCust * randomNum);
    cupsToLbs = Math.floor(cups / 20);
    totalLbs = Math.floor(cupsToLbs + lbs);

  }
}
  web.checkBeans();
  var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[n] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
  document.body.appendChild(ulEl);
  }

// // //end store vars
