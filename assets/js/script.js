const APIKey = "2bad7e955739134814dad27056a97e1a";
const cityInput = document.querySelector("#city");
const weatherResults = document.querySelector("#weatherResults");

document.querySelector("#fetchWeatherButton").addEventListener("click", () => {
    const city = cityInput.value;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    fetch(baseURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            displayWeather(data);
        })
        const baseURL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;
        fetch(baseURL2)
             .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const cityName = data.name;
    const windSpeedMs = data.wind.speed;
    const windSpeedKmh = (windSpeedMs * 3.6).toFixed(2); // Convert m/s to km/h
    const windSpeedMph = (windSpeedMs * 2.237).toFixed(2); // Convert m/s to mph

    weatherResults.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Description: ${weatherDescription}</p>
        <p>Temperature: ${temperature}K</p>
        <p>Wind Speed: ${windSpeedMs} m/s (${windSpeedKmh} km/h, ${windSpeedMph} mph)</p>
    `;
}

function displayForecast(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const cityName = data.name;
    const windSpeedMs = data.wind.speed;
    const windSpeedKmh = (windSpeedMs * 3.6).toFixed(2); // Convert m/s to km/h
    const windSpeedMph = (windSpeedMs * 2.237).toFixed(2); // Convert m/s to mph

    weatherResults.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Description: ${weatherDescription}</p>
        <p>Temperature: ${temperature}K</p>
        <p>Wind Speed: ${windSpeedMs} m/s (${windSpeedKmh} km/h, ${windSpeedMph} mph)</p>
    `;
}