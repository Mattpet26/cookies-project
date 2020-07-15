
 this.renderTable = function(){
  var table = document.getElementById('tableStuff');
  var row = document.createElement('tr');
  var tableHeadCell = document.createElement('th');
  tableHeadCell.textContent = this.name;
  row.appendChild(tableHeadCell);
  table.appendChild(row);
},



function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function cookieFunction(min, max, avgCookie, totalCookies, city){
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.totalCookies = totalCookies;
  this.city = city;
  this.cookieArray = [],
  this.time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
  this.renderCity = function(){
    var cityList = document.getElementById('city');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  }
  this.renderMath = function(){
    for(var i = 0; i < this.time.length; i++){
      var custPerHr = getRandomArbitrary(this.min, this.max);
      var cookiesThisHr = Math.floor(custPerHr * this.avgCookie);
      this.totalCookies = Math.floor(this.totalCookies + cookiesThisHr);
      this.cookieArray[i] = totalCookies;
    }
  this.renderTime = function(){
    for(var i = 0; i < this.time.length; i++){
      var timeList = document.getElementById('city');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + cookiesThisHr + ' cookies';
      timeList.appendChild(timeLine)
    }
  }
    var cookieTotalEl = document.getElementById('SeaTotal');
      var LiEl = document.createElement('li');
      LiEl.textContent = this.totalCookies + ' Total!';
      cookieTotalEl.appendChild(LiEl)
      console.log(this.max)
  }
}
var seattleName = new cookieFunction(23, 65, 6.3, 0, 'Seattle');
seattleName.renderCity();
seattleName.renderMath();
seattleName.renderTime();



var limaStore = {
  minCustomers : 2,
  maxCustomers : 16,
  averageCookiePerCustomer : 4.6,
  cookieArray : [],

  produceRandomCustomersPerHour : function(){
    var myRandomNum = getRandomIntInclusive(this.minCustomers, this.maxCustomers);
    return myRandomNum;
  },
  produceCookiesSoldAllDay : function(){
    for(var i = 0; i < 14; i++){
      // works once
      var cookiesSoldThisHour = this.produceRandomCustomersPerHour() * this.averageCookiePerCustomer;
      var roundedCookies = Math.floor(cookiesSoldThisHour);

      this.cookieArray[i] = roundedCookies;
      // done with once
    }
  },

  renderToPage : function(){
    // target - ul
    // new element - li
    // give it content - this.cookieArray[0] + cookies : 6am
    // append to the ul

    // should be looped 14 times

    // target - ul
    // new element - li
    // give it content - total : + this.calculateTotal()
    // append to the ul
  },

  calculateTotal : function(){
    // adds everyting in the this.cookieArray
    // return it
  }


};

limaStore.produceCookiesSoldAllDay();



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}