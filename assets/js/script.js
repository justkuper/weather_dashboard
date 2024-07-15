const API_KEY = "2bad7e955739134814dad27056a97e1a";

// Function to fetch current weather
function fetchCurrentWeather(city) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCurrentWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather:', error);
        });
}

// Function to display current weather
function displayCurrentWeather(data) {
    const currentWeatherDiv = document.getElementById("currentWeather");

    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const cityName = data.name;
    const windSpeed = data.wind.speed;
    
    currentWeatherDiv.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Description: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}

// Function to fetch weather forecast
function fetchWeatherForecast(city) {
    const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(weatherForecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherForecast(data);
        })
        .catch(error => {
            console.error('Error fetching weather forecast:', error);
        });
}

// Function to display weather forecast
function displayWeatherForecast(data) {
    const weatherForecastDiv = document.getElementById("weatherForecast");
    weatherForecastDiv.innerHTML = ''; // Clear previous forecast data

    data.list.forEach(forecast => {
        const forecastDate = new Date(forecast.dt * 1000); // Convert timestamp to milliseconds
        const forecastTime = forecastDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
        const temperature = forecast.main.temp;
        const weatherDescription = forecast.weather[0].description;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${forecastDate.toDateString()} ${forecastTime}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${weatherDescription}</p>
        `;

        weatherForecastDiv.appendChild(forecastItem);
    });
}

// Event listener for button click to fetch weather data
document.getElementById("fetchWeatherButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    
    fetchCurrentWeather(city);
    fetchWeatherForecast(city);
});
