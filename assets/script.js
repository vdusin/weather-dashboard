https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=aa4945bfa1063d57a5eed0fc5d29e13a
// aa4945bfa1063d57a5eed0fc5d29e13a(key)

var searchBar= document.querySelector(".searchBar")
var Button= document.querySelector(".button")
var cityName= document.querySelector(".cityName")
var temp=document.querySelector(".temp")
var wind=document.querySelector(".wind")
var humidity=document.querySelector(".humidity")


function renderWeather(data){
    console.log(data)
    cityName.textContent= data.city.name
    temp.textContent= "Temperature: "+ data.list[0].main.temp
    wind.textContent= "Wind: "+ data.list[0].wind.speed+ " mph"
    humidity.textContent= "Humidity: "+ data.list[0].main.humidity+ "%"
}

function render5day(data){
    for (var i = 0; i < data.list.length; i=i+8) {
      console.log(data.list[i])
      
      }
}

function weatherSearch(){
        var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+searchBar.value+"&appid=aa4945bfa1063d57a5eed0fc5d29e13a&units=imperial"
      
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

