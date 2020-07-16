'use strict'

var time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

var newStandForm = document.getElementById('addStore');

newStandForm.addEventListener('submit', createNewStand);

function createNewStand(event){
  event.preventDefault();
  var minValue = event.target.min1.value;
  var maxValue = event.target.max1.value;
  var avgCookieValue = event.target.avgCookie1.value;
  var cityName = event.target.city1.value;

  var newStand = new cookieFunction(minValue, maxValue, avgCookieValue, cityName)
  newStand.renderAsTable();
}

//================== start of constructor ===============

var cookieStoreArray = []; 

function cookieFunction(min, max, avgCookie, city){
  // this refers to the new object made by the constructor
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.total = 0;
  this.city = city;
  this.cookieArray = [],
  this.time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

  cookieStoreArray.push(this)
}

cookieFunction.prototype.calculateCookiesSold = function() {
  return Math.ceil( (Math.random() * (this.max - this.min + 1) + this.min) * this.avgCookie);
  //source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

//========================= Calculate hourly sales ========================
cookieFunction.prototype.calculateHourlySales = function() {
for( var i = 0; i < time.length; i++){
  console.log('calculating')
  var cookies = this.calculateCookiesSold();
  console.log(cookies)
  this.cookieArray.push(cookies)
  }
};

//========================= Calculate cookies per store ===================
cookieFunction.prototype.calculateTotalCookiesForStore = function() {
  for(var i = 0; i < this.time.length; i++){
    this.total = this.total + this.cookieArray[i];
  }
};

//========================= Render Time Header =============================
function renderTime(){
  // this does the hour header
  var table = document.getElementById('tableStuff');
  var row = document.createElement('tr');
  var tableData = document.createElement('td')
  row.appendChild(tableData)

  for(var i = 0; i < time.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = time[i];
    row.appendChild(tableData);
  }
  var tableData = document.createElement('td');
    tableData.textContent = 'Daily totals';
    row.appendChild(tableData);
    table.appendChild(row);
};

//============================== Render city with cookie data ==========
cookieFunction.prototype.renderAsTable = function(){
  var tableElement = document.getElementById('tableStuff');
  var rowElement = document.createElement('tr');
  var tableCell = document.createElement('th');
  tableCell.textContent = this.city;
  rowElement.appendChild(tableCell);
  //========================================= hours ====================
  this.calculateHourlySales();
  for(var i = 0; i < time.length; i++){
    var hourlyCookieCellElement = document.createElement('td');
    hourlyCookieCellElement.textContent = this.cookieArray[i];
    rowElement.appendChild(hourlyCookieCellElement)
  }
//================================== total for a store ================
var totalCellElement = document.createElement('td');
this.calculateTotalCookiesForStore();
totalCellElement.textContent = this.total;
rowElement.appendChild(totalCellElement)

tableElement.appendChild(rowElement)
};

//===================== render bottom totals =================
function renderBottomRow(){
  var tableElement = document.getElementById('tableStuff');
  var row = document.createElement('tr');
  var thElement  = document.createElement('th');
  thElement.textContent = 'Total';
  row.appendChild(thElement);

  var totalForAll = 0;
  // for(var storeIndex = 0; storeIndex < time.length; storeIndex++){
  //   totalForAll += cookieStoreArray[storeIndex].cookieArray[storeIndex];
  // }
  for(var i = 0; i < time.length; i++){
    var singleHourTotal = 0
    for( var j = 0; j < cookieStoreArray.length; j++){
      totalForAll += cookieStoreArray[j].cookieArray[i]
      singleHourTotal += cookieStoreArray[j].cookieArray[i];
    }
    var tableCell = document.createElement('td');
    tableCell.textContent = singleHourTotal;
    row.appendChild(tableCell);
  }
  var hourlytotalCell = document.createElement('td');
  hourlytotalCell.textContent= totalForAll;
  row.appendChild(hourlytotalCell)
  tableElement.appendChild(row);
};

new cookieFunction(23, 65, 6.3, 'Seattle');
new cookieFunction(3, 24, 1.2, 'Tokyo');
new cookieFunction(11, 38, 3.7, 'Dubai');
new cookieFunction(20, 38, 3.7, 'Paris');
new cookieFunction(2, 16, 4.6, 'Lima');

renderTime();
for(var i = 0; i < cookieStoreArray.length; i++){
 cookieStoreArray[i].renderAsTable();
}

renderBottomRow();