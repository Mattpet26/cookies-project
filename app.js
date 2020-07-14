'use strict';

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var SeattleCookies = {
  min: 23, 
  max: 65,
  avgCookie: 6.3,
  totalCookies: 0,
  city: 'Seattle',
  time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  renderCity: function(){
    var cityList = document.getElementById('city');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderTime: function(){
    for(var i = 0; i < this.time.length; i++){
      var cookieSale = getRandomArbitrary(23,65);
      this.totalCookies = this.totalCookies + cookieSale;
      var timeList = document.getElementById('seattleCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + cookieSale + ' cookies';
      timeList.appendChild(timeLine)
    }
    var cookieTotalEl = document.getElementById('SeaTotal');
      var LiEl = document.createElement('li');
      LiEl.textContent = this.totalCookies + ' Total!';
      cookieTotalEl.appendChild(LiEl)
      console.log(this.max)
  }
}
SeattleCookies.renderCity();
SeattleCookies.renderTime();

var TokyoCookies = {
  min: 3, 
  max: 24,
  avgCookie: 1.2,
  totalCookies: 0,
  city: 'Tokyo',
  time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  renderCity: function(){
    var cityList = document.getElementById('tokyo');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderTime: function(){
    for(var i = 0; i < this.time.length; i++){
      var cookieSale = getRandomArbitrary(3,24);
      this.totalCookies = this.totalCookies + cookieSale;
      var timeList = document.getElementById('tokyoCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomArbitrary(3,24) + ' cookies';
      timeList.appendChild(timeLine)
      console.log(this.max)
    }
    var cookieTotalEl = document.getElementById('tokTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.totalCookies + ' Total!';
    cookieTotalEl.appendChild(LiEl)
    console.log(this.max)
  }
}
TokyoCookies.renderTime();
TokyoCookies.renderCity();

var DubaiCookies = {
  min: 11, 
  max: 38,
  avgCookie: 3.7,
  totalCookies: 0,
  city: 'Dubai',
  time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  renderCity: function(){
    var cityList = document.getElementById('dubai');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderTime: function(){
    for(var i = 0; i < this.time.length; i++){
      var cookieSale = getRandomArbitrary(11,38);
      this.totalCookies = this.totalCookies + cookieSale;
      var timeList = document.getElementById('dubaiCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomArbitrary(11,38) + ' cookies';
      timeList.appendChild(timeLine)
      console.log(this.max)
    }
    var cookieTotalEl = document.getElementById('dubTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.totalCookies + ' Total!';
    cookieTotalEl.appendChild(LiEl)
    console.log(this.max)
  }
}
DubaiCookies.renderTime();
DubaiCookies.renderCity();

var ParisCookies = {
  min: 20, 
  max: 38,
  avgCookie: 2.3,
  totalCookies: 0,
  city: 'Paris',
  time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  renderCity: function(){
    var cityList = document.getElementById('paris');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderTime: function(){
    for(var i = 0; i < this.time.length; i++){
      var cookieSale = getRandomArbitrary(20,38);
      this.totalCookies = this.totalCookies + cookieSale;
      var timeList = document.getElementById('parisCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomArbitrary(20,38) + ' cookies';
      timeList.appendChild(timeLine)
      console.log(this.max)
    }
    var cookieTotalEl = document.getElementById('parTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.totalCookies + ' Total!';
    cookieTotalEl.appendChild(LiEl)
    console.log(this.max)
  }
}
ParisCookies.renderTime();
ParisCookies.renderCity();

var LimaCookies = {
  min: 2, 
  max: 16,
  avgCookie: 4.6,
  totalCookies: 0,
  city:'Lima',
  time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
  renderCity: function(){
    var cityList = document.getElementById('lima');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  renderTime: function(){
    for(var i = 0; i < this.time.length; i++){
      var cookieSale = getRandomArbitrary(2,16);
      this.totalCookies = this.totalCookies + cookieSale;
      var timeList = document.getElementById('limaCookies');
      var timeLine = document.createElement('li');
      timeLine.textContent = this.time[i] + getRandomArbitrary(2,16) + ' cookies';
      timeList.appendChild(timeLine)
      console.log(this.max)
    }
    var cookieTotalEl = document.getElementById('limTotal');
    var LiEl = document.createElement('li');
    LiEl.textContent = this.totalCookies + ' Total!';
    cookieTotalEl.appendChild(LiEl)
    console.log(this.max)
  }
}
LimaCookies.renderTime();
LimaCookies.renderCity();