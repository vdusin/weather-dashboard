var apiKey = "aa4945bfa1063d57a5eed0fc5d29e13a"

var searchBar= document.querySelector(".searchBar")
var Button= document.querySelector(".button")
var cityName= document.querySelector(".cityName")
// var currentDate=document.querySelector(".date")
var currentTemp=document.querySelector(".temp")
var currentWind=document.querySelector(".wind")
var currentHumidity=document.querySelector(".humidity")
var fivedayContainer=document.querySelector(".fiveDay")

function renderWeather(data){
    console.log(data)
    cityName.textContent= data.city.name
    // currentDate.textContent = data.dt_txt
    currentTemp.textContent= "Temperature: "+ data.list[0].main.temp
    currentWind.textContent= "Wind: "+ data.list[0].wind.speed+ " mph"
    currentHumidity.textContent= "Humidity: "+ data.list[0].main.humidity+ "%"
}

function render5day(data){

  fivedayContainer.innerHTML=""

  var fivedayHeader = document.createElement("h3");
      fivedayHeader.textContent = "Five-Day Forecast: " + searchBar.value;
      fivedayContainer.append(fivedayHeader)

    for (var i = 0; i < data.list.length; i=i+8) {
      console.log(data.list[i])
    
      var tempEl = document.createElement("p")
      tempEl.innerHTML = "Temperature: "+ data.list[i].main.temp
      fivedayContainer.append(tempEl)

      var windEl = document.createElement("p")
      windEl.innerHTML = "Wind: "+ data.list[0].wind.speed+ " mph"
      fivedayContainer.append(windEl)

      var humidityEL = document.createElement("p")
      humidityEL.innerHTML = "Humidity: "+ data.list[0].main.humidity+ "%"
      fivedayContainer.append(humidityEL)
      }
}

function weatherSearch(){
        var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+searchBar.value+ "&limit=1&appid=" +apiKey+ "&units=imperial"
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
        renderWeather(data)
        render5day(data)
          });
}
Button.addEventListener("click", weatherSearch)

