
const form = document.getElementById('weatherForm');
const getCity = document.getElementById('location');
const apiKey = '6bc236fa8bd5e7e03f83fd8cea3eac74';
const weatherCardsContainer = document.getElementById('weatherCardsContainer');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = getCity.value;

    const xhr = new XMLHttpRequest();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    xhr.open('GET', apiUrl);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            createWeatherCard(data);
        } else {
            console.log(`${xhr.status} : ${xhr.statusText}`);
        }
    };

    xhr.onerror = () => {
        console.log("Request failed");
    };

    xhr.send();
});

function createWeatherCard(data) {
    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';

    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.textContent = 'X';

    closeButton.addEventListener('click', () => {
        weatherCard.remove();
    });

    const cityNameElement = document.createElement('h2');
    cityNameElement.textContent = data.name;

    const countryNameElement = document.createElement('p');
    countryNameElement.textContent = data.sys.country;

    const weatherDescriptionElement = document.createElement('p');
    weatherDescriptionElement.textContent = data.weather[0].description;

    const weatherIconElement = document.createElement('img');
    weatherIconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIconElement.alt = 'Weather Icon';

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${data.main.temp} K`;

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    
    weatherCard.appendChild(closeButton);
    weatherCard.appendChild(cityNameElement);
    weatherCard.appendChild(countryNameElement);
    weatherCard.appendChild(weatherDescriptionElement);
    weatherCard.appendChild(weatherIconElement);
    weatherCard.appendChild(temperatureElement);
    weatherCard.appendChild(humidityElement);

    weatherCardsContainer.appendChild(weatherCard);
}
