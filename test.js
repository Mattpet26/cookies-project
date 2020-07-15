
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