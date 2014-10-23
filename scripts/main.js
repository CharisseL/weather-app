var zipcode = '37217';
var url = 'http://api.wunderground.com/api/2ffba1e154f1d0c5/forecast10day/q/' + zipcode + '.json';

function addItemToList($list, temp){
	var $li =document.createElement('li');
	var $day = document.createElement('p');
  var $high = document.createElement('p');
  var $low = document.createElement('p');
  $day.innerHTML = temp.date.weekday;
  $high.innerHTML = 'High: ' + temp.high.fahrenheit + "&deg f";
  $low.innerHTML = 'Low: ' + temp.low.fahrenheit + "&deg f";
  $li.appendChild($day);
  $li.appendChild($high);
  $li.appendChild($low);
  $list.appendChild($li);
}
function newZip(city){
  var $newCity = document.getElementById('newCity');
  $newCity.innerHTML = city;
}

	
function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}
function showData(data){
  var forecast = data.forecast.simpleforecast.forecastday;
  console.log('forecast', forecast);
  var $ul = document.getElementById('forecast');
  for(var i = 0; i < 5; i++){
    addItemToList($ul, forecast[i]);
    console.log('FC', forecast[i]);
  }
	var city = data.location.city;
  newCity(city);
}
document.addEventListener('DOMContentLoaded', function(){
	var $form = document.getElementById('enterZip');
	var $userZip = $form.querySelector('input[type=text]');
	$form.addEventListener('submit', function(event){
		event.preventDefault();	
	var url = 'http://api.wunderground.com/api/2ffba1e154f1d0c5/forecast10day/q/' + $userZip.value + '.json';
	getJSONP(url, 'showData')
  });
});




