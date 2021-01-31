class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${parseFloat(weather.main.temp).toFixed(1)}°C`;
    this.icon.setAttribute(
      'src',
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${parseInt(
      weather.main.humidity
    )}%`;
    this.feelsLike.textContent = `Feels Like: ${parseFloat(
      weather.main.feels_like
    ).toFixed(1)}°C`;
    this.pressure.textContent = `Pressure: ${parseInt(
      weather.main.pressure
    )} hPa`;
    this.wind.textContent = `Wind Speed: ${parseFloat(
      weather.wind.speed * 3.6
    ).toFixed(1)} km/h`;
  }
}
