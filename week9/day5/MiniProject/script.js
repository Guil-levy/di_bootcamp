const form = document.getElementById('weatherForm');
const getCity= document.getElementById('location');
const submit = document.getElementById('submit')
const apiKey = '6bc236fa8bd5e7e03f83fd8cea3eac74';

const xhr = new XMLHttpRequest();

const weatherCard = document.getElementById('weatherCard');
const cityNameElement = document.getElementById('cityName');
const countryNameElement = document.getElementById('countryName');
const weatherDescriptionElement = document.getElementById('weatherDescription');
const weatherIconElement = document.getElementById('weatherIcon');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');

const convertToCelsiusButton = document.getElementById('convertToCelsius');
const convertToFahrenheitButton = document.getElementById('convertToFahrenheit');




form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const cityName = getCity.value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    xhr.open('get', apiUrl);


xhr.send();

xhr.onload = () => {
  if (xhr.status === 200){
    const data = JSON.parse(xhr.responseText);
    displayWeatherData(data);
   }else {console.log(`${xhr.status} : ${xhr.statusText} `);
}
}});

xhr.onerror = () => {
  console.log("Request failed");
};

xhr.onprogress = (event) => {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded}`);
  } else {
    console.log(`Received ${event.loaded}`);
  }
};

function displayWeatherData(data) {
    cityNameElement.textContent = data.name;
    countryNameElement.textContent = data.sys.country;
    weatherDescriptionElement.textContent = data.weather[0].description;
    weatherIconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    temperatureElement.textContent = `Temperature: ${data.main.temp} K`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

    weatherCard.style.display = 'block';

    // Add event listeners to the conversion buttons
    convertToCelsiusButton.addEventListener('click', () => {
        const temperatureInKelvin = data.main.temp;
        const temperatureInCelsius = temperatureInKelvin - 273.15; // Convert K to °C
        temperatureElement.textContent = `Temperature: ${temperatureInCelsius.toFixed(2)} °C`;
    });

    convertToFahrenheitButton.addEventListener('click', () => {
        const temperatureInKelvin = data.main.temp;
        const temperatureInFahrenheit = (temperatureInKelvin * 9/5) - 459.67; // Convert K to °F
        temperatureElement.textContent = `Temperature: ${temperatureInFahrenheit.toFixed(2)} °F`;
    });
}