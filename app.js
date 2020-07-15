'use strict';
//Pair programmed with Mike and Riva/collaborated with.

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
  //assigning a method to rendercity and it gets a function.
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
    table.appendChild(row);
  }
  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  this.renderMath = function(){
    for(var i = 0; i < this.time.length; i++){
      var custPerHr = getRandomArbitrary(this.min, this.max);
      var cookiesThisHr = Math.floor(custPerHr * this.avgCookie);
      this.cookieArray.push(cookiesThisHr);
      this.totalCookies = this.totalCookies + cookiesThisHr;
    }
  this.renderTime = function(){
    var table = document.getElementById('tableStuff');
    var row = document.createElement('tr');
    var tableData = document.createElement('td')
    row.appendChild(tableData)
    for(var i = 0; i < this.time.length; i++){
      var tableData = document.createElement('td')
      tableData.textContent = this.time[i];
      row.appendChild(tableData);
    }
    table.appendChild(row);
  }
  this.renderBottomRow = function(){
    var table = document.getElementById('tableStuff');
    var row = document.createElement('tr');
    var tableData = document.createElement('td')
    tableData.textContent = 'Totals';
    row.appendChild(tableData)
    for(var i = 0; i < this.time.length; i++){
      var tableData = document.createElement('td')
      tableData.textContent = seattleName.cookieArray[i] + tokyoName.cookieArray[i] + dubaiName.cookieArray[i] + parisName.cookieArray[i] + limaName.cookieArray[i];
      row.appendChild(tableData)
    }
    table.appendChild(row);
  }
    var cookieTotalEl = document.getElementById('tableStuff');
      var LiEl = document.createElement('tr');
      LiEl.textContent = this.totalCookies;
      cookieTotalEl.appendChild(LiEl)
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