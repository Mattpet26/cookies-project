



 this.renderTable: function(){
  var table = document.getElementById('tableStuff');
  var row = document.createElement('tr');
  var tableHeadCell = document.createElement('th');
  tableHeadCell.textContent = this.name;
  row.appendChild(tableHeadCell);
  table.appendChild(row);
},



function cookieFunction(minNum, maxNum, avgCookie, totalCookies, city, [time]){
  this.min = minNum;
  this.max = maxNum;
  this.avgCookie = avgCookie;
  this.totalCookies = totalCookies;
  this.city = city;
  this.time = [time];
  this.renderCity = function(){
    var cityList = document.getElementById('city');
    var location = document.createElement('li');
    location.textContent = this.city;
    cityList.appendChild(location);
  },
  this.renderTime = function(){
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
var seattleName = new cookieFunction(23, 65, 6.3, 0, 'Seattle', ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']);
seattleName.renderCity();
seattleName.renderTime();