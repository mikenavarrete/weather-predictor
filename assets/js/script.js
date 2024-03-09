$(".Search").on("click", function () {
    searchWeather();
});

$("#Search").on("keydown", function (event){
    if(event.key==="Enter"){
        searchWeather();
    }
});

function searchWeather(){

    var city = $("#Search").val();
    console.log(city);

    var APIKey = "47ed4784922cdc48cdbb6ec11db4b3e7";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
  
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            // Process the data received from the API
            console.log(city);
            console.log(data);

            // Save the data in local storage
  
            var searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || []; 
            if (!Array.isArray(searchedCities)) {
                searchedCities=[];
            }
            searchedCities.push(city);
            localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
            localStorage.setItem('weatherData', JSON.stringify(data));
 
            displayWeatherInfo(data);
            displayPreviousCities();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.')
        });
}

// Retrieve and display stored weather data
const storedData = localStorage.getItem('weatherData');
if (storedData) {
    const weatherData = JSON.parse(storedData);
    console.log(weatherData);
    // You can display the weather data on the page or perform other actions with it.
    displayWeatherInfo(weatherData); 
    displayWeatherInfo2(weatherData);
    displayWeatherInfo3(weatherData);
    displayWeatherInfo4(weatherData);
    displayWeatherInfo5(weatherData);
}

function displayWeatherInfo(weatherData) {
    // Assuming weatherData has the necessary properties
    var cityNameElement = document.getElementById("cityName");
    cityNameElement.innerHTML = `<p>City: ${weatherData.city.name}</p>`;

    var currentDate = weatherData.list[0].dt_txt.split(' ')[0];
    var currentDateElement = document.getElementById("currentDate");
    currentDateElement.innerHTML = `<p>Date: ${currentDate}</p>`;

    var tempInKelvin1 = weatherData.list[0].main.temp;
    var tempInFahrenheit1 = convertKelvinToFahrenheit(tempInKelvin1);

    var tempElement = document.getElementById("temp");
    tempElement.innerHTML = `<p>Temperature: ${tempInFahrenheit1}&deg;F</p>`;

    var humidityElement = document.getElementById("humidity");
    humidityElement.innerHTML = `<p>Humidity: ${weatherData.list[0].main.humidity} %</p>`;

    var windSpeedElement = document.getElementById("windSpeed");
    windSpeedElement.innerHTML = `<p>Wind Speed: ${weatherData.list[0].wind.speed} MPH</p>`;

    var icon1Element = document.getElementById("icon1");
    icon1Element.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png" alt="Weather Icon">`;
}

function displayWeatherInfo2(weatherData) {
    // Assuming weatherData has the necessary properties
   
    var date2 = weatherData.list[7].dt_txt.split(' ')[0];
    var date2Element = document.getElementById("date2");
    date2Element.innerHTML = `<p>Date: ${date2}</p>`;

    var tempInKelvin2 = weatherData.list[7].main.temp;
    var tempInFahrenheit2 = convertKelvinToFahrenheit(tempInKelvin2);

    var temp2Element = document.getElementById("temp2");
    temp2Element.innerHTML = `<p>Temperature: ${tempInFahrenheit2}&deg;F</p>`;

    var humidity2Element = document.getElementById("humidity2");
    humidity2Element.innerHTML = `<p>Humidity: ${weatherData.list[7].main.humidity} %</p>`;

    var windSpeed2Element = document.getElementById("windSpeed2");
    windSpeed2Element.innerHTML = `<p>Wind Speed: ${weatherData.list[7].wind.speed} MPH</p>`;

    var icon2Element = document.getElementById("icon2");
    icon2Element.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[7].weather[0].icon}.png" alt="Weather Icon">`;

}

function displayWeatherInfo3(weatherData) {
    // Assuming weatherData has the necessary properties
   
    var date3 = weatherData.list[15].dt_txt.split(' ')[0];
    var date3Element = document.getElementById("date3");
    date3Element.innerHTML = `<p>Date: ${date3}</p>`;

    var tempInKelvin3 = weatherData.list[15].main.temp;
    var tempInFahrenheit3 = convertKelvinToFahrenheit(tempInKelvin3);

    var temp3Element = document.getElementById("temp3");
    temp3Element.innerHTML = `<p>Temperature: ${tempInFahrenheit3}&deg;F</p>`;

    var humidity3Element = document.getElementById("humidity3");
    humidity3Element.innerHTML = `<p>Humidity: ${weatherData.list[15].main.humidity} %</p>`;

    var windSpeed3Element = document.getElementById("windSpeed3");
    windSpeed3Element.innerHTML = `<p>Wind Speed: ${weatherData.list[15].wind.speed} MPH</p>`;

    var icon3Element = document.getElementById("icon3");
    icon3Element.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[15].weather[0].icon}.png" alt="Weather Icon">`;

}

function displayWeatherInfo4(weatherData) {
    // Assuming weatherData has the necessary properties
   
    var date4 = weatherData.list[23].dt_txt.split(' ')[0];
    var date4Element = document.getElementById("date4");
    date4Element.innerHTML = `<p>Date: ${date4}</p>`;

    var tempInKelvin4 = weatherData.list[23].main.temp;
    var tempInFahrenheit4 = convertKelvinToFahrenheit(tempInKelvin4);

    var temp4Element = document.getElementById("temp4");
    temp4Element.innerHTML = `<p>Temperature: ${tempInFahrenheit4}&deg;F</p>`;

    var humidity4Element = document.getElementById("humidity4");
    humidity4Element.innerHTML = `<p>Humidity: ${weatherData.list[23].main.humidity} %</p>`;

    var windSpeed4Element = document.getElementById("windSpeed4");
    windSpeed4Element.innerHTML = `<p>Wind Speed: ${weatherData.list[23].wind.speed} MPH</p>`;

    var icon4Element = document.getElementById("icon4");
    icon4Element.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[23].weather[0].icon}.png" alt="Weather Icon">`;

}

function displayWeatherInfo5(weatherData) {
    // Assuming weatherData has the necessary properties
   
    var date5 = weatherData.list[31].dt_txt.split(' ')[0];
    var date5Element = document.getElementById("date5");
    date5Element.innerHTML = `<p>Date: ${date5}</p>`;

    var tempInKelvin5 = weatherData.list[31].main.temp;
    var tempInFahrenheit5 = convertKelvinToFahrenheit(tempInKelvin5);

    var temp5Element = document.getElementById("temp5");
    temp5Element.innerHTML = `<p>Temperature: ${tempInFahrenheit5}&deg;F</p>`;

    var humidity5Element = document.getElementById("humidity5");
    humidity5Element.innerHTML = `<p>Humidity: ${weatherData.list[31].main.humidity} %</p>`;

    var windSpeed5Element = document.getElementById("windSpeed5");
    windSpeed5Element.innerHTML = `<p>Wind Speed: ${weatherData.list[31].wind.speed} MPH</p>`;

    var icon5Element = document.getElementById("icon5");
    icon5Element.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[31].weather[0].icon}.png" alt="Weather Icon">`;

}

function displayWeatherInfo6(weatherData) {
    // Assuming weatherData has the necessary properties
   
    var date6 = weatherData.list[39].dt_txt.split(' ')[0];
    var date6Element = document.getElementById("date6");
    date6Element.innerHTML = `<p>Date: ${date6}</p>`;

    var temp6Element = document.getElementById("temp6");
    temp6Element.innerHTML = `<p>Temperature: ${weatherData.list[39].main.temp}&deg;F</p>`;

    var humidity6Element = document.getElementById("humidity6");
    humidity6Element.innerHTML = `<p>Humidity: ${weatherData.list[39].main.humidity} %</p>`;

    var windSpeed5Element = document.getElementById("windSpeed5");
    windSpeed5Element.innerHTML = `<p>Wind Speed: ${weatherData.list[31].wind.speed}</p>`;

    var icon5Element = document.getElementById("icon5");
    icon5Element.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.list[31].weather[0].icon}.png" alt="Weather Icon">`;

}

function displayPreviousCities(){
    var searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || []; 
    var previousCitiesElement = document.getElementById("previousCities");

    previousCitiesElement.innerHTML = '';

  
        searchedCities.forEach(city => {
            previousCitiesElement.innerHTML  += `<button class="previousCityButton" data-city="${city}">${city}</button>`;  
        });
   
    document.querySelectorAll('.previousCityButton').forEach(button=>{
        button.addEventListener('click', function () {
            var selectedCity = this.getAttribute('data-city');
            searchForPreviousCity(selectedCity);
        });
    });
}

function searchForPreviousCity(city){
    var APIKey = "47ed4784922cdc48cdbb6ec11db4b3e7";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('weatherData', JSON.stringify(data));
            displayWeatherInfo(data);
        })
        .catch(error => {
            console.error('error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem('searchedCities');
    });

function convertKelvinToFahrenheit(tempInKelvin) {
    return ((tempInKelvin - 273.15) * 9/5 + 32).toFixed(2); 
    }
