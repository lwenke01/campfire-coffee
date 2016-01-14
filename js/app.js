//DEVELOPER
//As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand.
//As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
//As a developer, I want to utilize CSS and images to develop an attractive brand for the company, including a logo and a color scheme that can be utilized in both the website and on company-themed merchandise.
//As a developer, I want be sure that the public-facing page contains all information that customers would typically seek at a business's website (addresses, hours, contact information, etc.).
//As a developer, I want to present the store data in a table format on the webpage, so each store's data is easier to represent and understand
//As a developer, I want to provide Jo with some basic placeholder text (lorem ipsum), so that she can see her site populated without having to write content.

//BUSINESS OWNER
//As a business owner, I want an attractive public-facing site that helps build the brand for my company with camping/forest themed colors and images.
//As a business owner, I want a specific set of images that I've chosen to be featured on the site.
//As a business owner, I want to begin selling merchandise such as mugs and clothing in addition to coffee, both in retail locations and on the website, but I need assistance with the design aspects.
//As a business owner, I want the company slogan "Campfire Coffee: From the tent to the fire, it's our coffee you require" to appear on all website pages and merchandise.
//As a business owner, I want my public-facing site to help customers find our retail locations.
//As a business owner, I want the business-side of my site to provide me with accurate sales projections so that I can manage inventory.
//As a business owner, I want a webpage that displays individual store data for Campfire Coffee, so that I can be informed about how to run my business
//As a business owner, I want the business-side of my site to provide me with accurate sales projections so that I can manage staffing.
//As a business owner, I want my site to link to some other local camping-related resources, so that my users have additional information and will see my site as a resource for their camping needs.

//CLIENT
//As a customer, I want to visit a site that quickly and clearly gives me the information that I seek about a business.
//As a customer, I want to know about the history of a business.
//As a customer, I want to know about how a business promotes sustainability.
//As a customer, I want to understand how the business's product is unique.
//As a customer, I want to know if the business recommends any specific use procedures for their products.
//As a customer, I want to be able to buy products online.
//As a customer, I enjoy visiting websites that have an attractive design.


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


//CompanySite - header
// //declare variables
// var sectEl_1 = document.getElementById('customerSite');
// //h1
// var h1El_1 = document.createElement('h1');
// h1El_1.textContent = 'Campfire Coffee';
// trEl.appendChild(thEl);
// var position1 = document.getElementsByTagName('ul')[0];
// position1.appendChild(h1text_1);
