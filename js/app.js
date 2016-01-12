

var timeOfDay = ['6:00 am',
  '7:00 am',
  '8:00 am',
  '9:00 am',
  '10:00 am',
  '11:00 am',
  '12:00 pm',
  '1:00 pm',
  '2:00 pm',
  '3:00 pm',
  '4:00  pm'
  ,'5:00 pm'
  ,'6:00 pm','7:00 pm', '8:00 pm']

//stores

//pike place
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
  console.log(randomNum + ' Random number per day');
  cups = Math.floor(this.aveCupsCust * randomNum);
  console.log(cups + ' Total cups per person');
  lbs = Math.floor(this.aveLbsCust * randomNum);
  console.log(lbs + ' Total pounds per person');
  cupsToLbs = Math.floor(cups / 20);
  console.log(cupsToLbs + ' Cups to pounds');
  totalLbs = Math.floor(cupsToLbs + lbs);
  console.log(totalLbs + ' Total pounds of beans');

  }
}

  //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]//
pike.checkBeans();
var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[i] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
document.body.appendChild(ulEl);

}

//cap Hill
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

  checkBeans: function(){
    randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    console.log(randomNum + ' Random number per day');
    cups = Math.floor(this.aveCupsCust * randomNum);
    console.log(cups + ' Total cups per person');
    lbs = Math.floor(this.aveLbsCust * randomNum);
    console.log(lbs + ' Total pounds per person');
    cupsToLbs = Math.floor(cups / 20);
    console.log(cupsToLbs + ' Cups to pounds');
    totalLbs = Math.floor(cupsToLbs + lbs);
    console.log(totalLbs + ' Total pounds of beans');
  }
}
cap.checkBeans();
var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[j] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
document.body.appendChild(ulEl);
}

//spl
var h1ElSpl = document.createElement('h1');
h1ElSpl.textContent = 'Seattle Public Library';
document.body.appendChild(h1ElSpl);
var randomNum;
var cups;
var lbs;
var cupsToLbs;
var totalLbs;

for(var k =0; k < timeOfDay.length; k++) {
var spl = {
  name: 'Seattle Public Library',
  minCustHr:49,
  maxCustHr:75,
  aveCupsCust:2.6,
  aveLbsCust:0.2,
  checkBeans: function(){
    randomNum = Math.floor((Math.random()) * (this.maxCustHr - this.minCustHr +1) + this.minCustHr);
    console.log(randomNum + ' Random number per day');
    cups = Math.floor(this.aveCupsCust * randomNum);
    console.log(cups + ' Total cups per person');
    lbs = Math.floor(this.aveLbsCust * randomNum);
    console.log(lbs + ' Total pounds per person');
    cupsToLbs = Math.floor(cups / 20);
    console.log(cupsToLbs + ' Cups to pounds');
    totalLbs = Math.floor(cupsToLbs + lbs);
    console.log(totalLbs + ' Total pounds of beans');
  }
}
spl.checkBeans();
  var ulEl = document.createElement('li');
  ulEl.textContent = timeOfDay[k] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
  document.body.appendChild(ulEl);
}

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
    console.log(randomNum + ' Random number per day');
    cups = Math.floor(this.aveCupsCust * randomNum);
    console.log(cups + ' Total cups per person');
    lbs = Math.floor(this.aveLbsCust * randomNum);
    console.log(lbs + ' Total pounds per person');
    cupsToLbs = Math.floor(cups / 20);
    console.log(cupsToLbs + ' Cups to pounds');
    totalLbs = Math.floor(cupsToLbs + lbs);
    console.log(totalLbs + ' Total pounds of beans');
  }
}
  slu.checkBeans();
  var ulEl = document.createElement('li');
  ulEl.textContent = timeOfDay[l] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
  document.body.appendChild(ulEl);
}


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
  console.log(randomNum + ' Random number per day');
  cups = Math.floor(this.aveCupsCust * randomNum);
  console.log(cups + ' Total cups per person');
  lbs = Math.floor(this.aveLbsCust * randomNum);
  console.log(lbs + ' Total pounds per person');
  cupsToLbs = Math.floor(cups / 20);
  console.log(cupsToLbs + ' Cups to pounds');
  totalLbs = Math.floor(cupsToLbs + lbs);
  console.log(totalLbs + ' Total pounds of beans');
  }
}
sta.checkBeans();
var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[m] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
document.body.appendChild(ulEl);
  }

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
    console.log(randomNum + ' Random number per day');
    cups = Math.floor(this.aveCupsCust * randomNum);
    console.log(cups + ' Total cups per person');
    lbs = Math.floor(this.aveLbsCust * randomNum);
    console.log(lbs + ' Total pounds per person');
    cupsToLbs = Math.floor(cups / 20);
    console.log(cupsToLbs + ' Cups to pounds');
    totalLbs = Math.floor(cupsToLbs + lbs);
    console.log(totalLbs + ' Total pounds of beans');
  }
}
  web.checkBeans();
  var ulEl = document.createElement('li');
ulEl.textContent = timeOfDay[n] + ': ' + totalLbs + ' lbs [' + randomNum + ' customers, ' + cups + ' cups (' + cupsToLbs + ' lbs), ' + lbs + ' to-go]';
  document.body.appendChild(ulEl);
  }

// // //end store vars



// // //elements
// // // var paragraphEl = document.createElement('p');
// // // paragraphEl.textContent = pike.checkBeans;
// // // document.body.appendChild(paragraphEl);
