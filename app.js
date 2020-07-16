'use strict';
//Pair programmed with Mike and Riva/collaborated with.


var newStandForm = document.getElementById('addStore');

newStandForm.addEventListener('submit', createNewStand);

function createNewStand(event){
  event.preventDefault();
  var minValue = event.target.min1.value;
  var maxValue = event.target.max1.value;
  var avgCookieValue = event.target.avgCookie1.value;
  var cityName = event.target.city1.value;

  var newStand = new cookieFunction(minValue, maxValue, avgCookieValue, cityName)
  newStand.renderCity();
  newStand.renderMath();
}

//================================= Table Stuff=========================//

function cookieFunction(min, max, avgCookie, totalCookies, city){
  // this refers to the new object made by the constructor
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.totalCookies = totalCookies;
  this.city = city;
  this.cookieArray = [],
  this.time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

  this.renderCity = function(){
    var table = document.getElementById('tableStuff');
    var row = document.createElement('tr');
    var tableData = document.createElement('td')
    tableData.textContent = this.city;
    row.appendChild(tableData)

    for(var i = 0; i < this.time.length; i++){
      var tableData = document.createElement('td')
      tableData.textContent = this.cookieArray[i];
      row.appendChild(tableData)
    }
    var tableCityTotals = document.createElement('td')
    tableCityTotals.textContent = this.totalCookies;
    row.appendChild(tableCityTotals);
    table.appendChild(row);
  }


  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }


  this.renderMath = function(){
    for(var i = 0; i < this.time.length; i++){
      var custPerHr = getRandomArbitrary(this.min, this.max);
      var cookiesThisHr = Math.floor(custPerHr * this.avgCookie);
      this.cookieArray.push(cookiesThisHr);
      this.totalCookies = this.totalCookies + cookiesThisHr;
    }
  }


  this.renderTime = function(){
    // this does the hour header
    var table = document.getElementById('tableStuff');
    var row = document.createElement('tr');
    var tableData = document.createElement('td')
    row.appendChild(tableData)

    for(var i = 0; i < this.time.length; i++){
      var tableData = document.createElement('td');
      tableData.textContent = this.time[i];
      row.appendChild(tableData);
    }
    var tableData = document.createElement('td');
      tableData.textContent = 'Daily totals';
      row.appendChild(tableData);
      table.appendChild(row);
  }


  this.renderBottomRow = function(){
    var table = document.getElementById('tableStuff');
    var row = document.createElement('tr');
    var tableData = document.createElement('td')
    tableData.textContent = 'Hourly totals';
    row.appendChild(tableData)
    var counter = 0;

    for(var i = 0; i < this.time.length; i++){
      var tableData = document.createElement('td')
      var saveTheCookieTotals = seattleName.cookieArray[i] + tokyoName.cookieArray[i] + dubaiName.cookieArray[i] + parisName.cookieArray[i] + limaName.cookieArray[i];
      tableData.textContent = saveTheCookieTotals;
      counter = saveTheCookieTotals + counter;
      row.appendChild(tableData)
    }
    var tableData = document.createElement('td')
    tableData.textContent = counter;
    row.appendChild(tableData)
    table.appendChild(row);
  }
}

var seattleName = new cookieFunction(23, 65, 6.3, 0, 'Seattle');
seattleName.renderMath();
seattleName.renderTime();
seattleName.renderCity();

var tokyoName = new cookieFunction(3, 24, 1.2, 0, 'Tokyo');
tokyoName.renderMath();
tokyoName.renderCity();

var dubaiName = new cookieFunction(11, 38, 3.7, 0, 'Dubai');
dubaiName.renderMath();
dubaiName.renderCity();

var parisName = new cookieFunction(20, 38, 3.7, 0, 'Paris');
parisName.renderMath();
parisName.renderCity();

var limaName = new cookieFunction(2, 16, 4.6, 0, 'Lima');
limaName.renderMath();
limaName.renderCity();
limaName.renderBottomRow();