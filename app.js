// Initialize storage
const storage = new Storage();
// Get location from local storage
weatherLocation = storage.getLocationData();
// Init weaather
const weather = new Weather(weatherLocation.city);
// Init ui
const ui = new UI(weather);

const getWeather = () => {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => {
      // console.log(err);
      storage.setLocationData();
    });
};

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

const updateWeather = (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  if (!city) return;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  document.getElementById('city').value = '';
};

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  updateWeather(e);
});

// Change on 'Enter' key press
document.getElementById('city').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    updateWeather(e);
  }
});
