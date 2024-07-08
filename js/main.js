//Today's Card Variables:
let today = document.getElementById("today"),
  todayDate = document.getElementById("today-date"),
  cityLocation = document.getElementById("location"),
  todayDegree = document.getElementById("today-degree"),
  todayIcon = document.getElementById("today-icon"),
  description = document.getElementById("today-description"),
  humidty = document.getElementById("humidty"),
  wind = document.getElementById("wind"),
  compass = document.getElementById("compass"),
  searchBar = document.getElementById("search-bar");

//Next Days Variables:
let nextDay = document.getElementsByClassName("nextDay"),
  nextDayIcon = document.getElementsByClassName("nextDay-icon"),
  maxDegree = document.getElementsByClassName("max-degree"),
  minDegree = document.getElementsByClassName("min-degree"),
  nextDayDescription = document.getElementsByClassName("nextDay-description"),
  apiResponse,
  responseData,
  monthName = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Spet', 'Oct', 'Nov', 'Dec'],
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]





// get data from Api (By the first way - two functions)
{
  // async function getKey(city) {
  //   const api = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU&q=${city}`)
  //   const responseData = await api.json()
  //   return responseData[0].Key;

  // }



  // async function getData(city) {
  //   const key = await getKey(city)
  //   apiResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU`)
  //   responseData = await apiResponse.json()
  //   getCurrentDay()
  // }

}

// try to use the first api and it has poor data
{
  // function getCurrentDay() {
  //   let date = new Date();
  //   today.innerHTML = days[date.getDay()];
  //   todayDate.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}`;
  //   todayDegree.innerHTML = responseData.DailyForecasts[0].Temperature.Minimum.Value - 32;
  //   todayIcon.setAttribute("src", `https://developer.accuweather.com/sites/default/files/0${responseData.DailyForecasts[0].Day.Icon}-s.png`)
  //   description.innerHTML = responseData.DailyForecasts[0].Day.IconPhrase;
  //   //   console.log(responseData.DailyForecasts[0])
  // }
  // getData('tanta')

}



// get data from Api
async function getWeatherData(currentCity = 'tanta') {
  apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`)
  responseData = await apiResponse.json()
  console.log(responseData)
  getCurrentDay();
  getNextDay()
}

getWeatherData();



function getCurrentDay() {

  let date = new Date();
  today.innerHTML = days[date.getDay()];
  todayDate.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}`;
  todayDegree.innerHTML = responseData.current.temp_c;
  todayIcon.setAttribute("src", `https:${responseData.current.condition.icon}`)

  cityLocation.innerHTML = responseData.location.name;
  description.innerHTML = responseData.current.condition.text;

  humidty.innerHTML = responseData.current.humidity;
  wind.innerHTML = responseData.current.wind_kph;
  compass.innerHTML = responseData.current.wind_dir;

}



function getNextDay() {
  for (let i = 0; i < nextDay.length; i++) {
    nextDay[i].innerHTML = days[new Date(responseData.forecast.forecastday[i + 1].date).getDay()];
    nextDayIcon[i].setAttribute('src', `https:${responseData.forecast.forecastday[i + 1].day.condition.icon}`)

    maxDegree[i].innerHTML = responseData.forecast.forecastday[i + 1].day.maxtemp_c;
    minDegree[i].innerHTML = responseData.forecast.forecastday[i + 1].day.mintemp_c;

    nextDayDescription[i].innerHTML = responseData.forecast.forecastday[i + 1].day.condition.text;
  }
}
searchBar.addEventListener("keyup", function () {
  let currentCity = searchBar.value;
  console.log(currentCity);
  getWeatherData(currentCity);
})


