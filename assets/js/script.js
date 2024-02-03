$(".Search").on("click", function () {
    console.log("hello");

    var city = $("#Search").val();
    console.log(city);

    var APIKey = "47ed4784922cdc48cdbb6ec11db4b3e7";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            // Process the data received from the API
            console.log(data);

            // Save the data in local storage
            localStorage.setItem('weatherData', JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

// Retrieve and display stored weather data
const storedData = localStorage.getItem('weatherData');
if (storedData) {
    const weatherData = JSON.parse(storedData);
    console.log(weatherData);
    // You can display the weather data on the page or perform other actions with it.
}

