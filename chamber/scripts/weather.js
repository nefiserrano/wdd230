const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const loc = document.querySelector('#location')
const lat = 20.10;
const long = -98.75;
const key = '100ddd46bfe64ebdb9d0c95291c79f2a'

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(weatherURL);
        const response2 = await fetch(forecastURL);
        if (response.ok && response2.ok) {
            const data = await response.json();
            const data2 = await response2.json();
            displayResults(data);
            forecastWeather(data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', 'Weather Icon');
  captionDesc.textContent = `${desc}`;
  loc.textContent = `${data.name}`;
}

function forecastWeather(data2) {
    const forecast = {};
    const today = new Date();
    const threeDays = new Date();
    threeDays.setDate(today.getDate() + 2);
    data2.list.forEach(item => {
        const date = new Date(item.dt_txt);
        if (date < threeDays) {
            const dateKey = date.toISOString().split('T')[0];
            if (!forecast[dateKey]) {
                forecast[dateKey] = {
                    temperature: item.main.temp,
                    icon: item.weather[0].icon,
                    description: item.weather[0].description
                };
            }
        }
    });
    for (const date in forecast) {
        const forecastDiv = document.querySelector('#forecast');
        const iconURL = `https://openweathermap.org/img/wn/${forecast[date].icon}@2x.png`;
        const iconImg = document.createElement('img');
        iconImg.setAttribute('src', iconURL);
        iconImg.setAttribute('alt', 'Weather Icon');
        forecastDiv.appendChild(iconImg);
        const temperatureDesc = document.createElement('p');
        temperatureDesc.textContent = `${date}: ${forecast[date].temperature}°F - ${forecast[date].description}`;
        forecastDiv.appendChild(temperatureDesc);
    }
}