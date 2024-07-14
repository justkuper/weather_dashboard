// baseURL=
// APIKey=2bad7e955739134814dad27056a97e1a

const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
const APIKey = `2bad7e955739134814dad27056a97ela`;
const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
var listEl = document.getElementById('myData');
let city = ``;
const cityInput = document.getElementById('cityInput');

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

fetch(baseURL)
  .then(function(response) {
    // Convert to JSON object
    return response.json();
  })
  .then(function(data) {
    // Display in HTML here
    var docArray = data.response.docs;
    for(var i = 0; i < docArray.length; i++) {
        var listItem = document.createdElement("li");
        listItem.textContent = docArray[i];
        listEl.appendChild(listItem);
    }
  })
  .catch(function(error) {
    // In case there is an error
    console.log(error);
  });

  cityInput.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    city = cityInput.value; // Update the city variable with the user input
    console.log(city); // You can log the city name to verify it's being stored correctly
});

fetch(badRequestURL).then(function (response) {
    if (response.status !== 200) {
        document.location.replace('./404.html')
    }
    else {
        return response.json();
    }
});