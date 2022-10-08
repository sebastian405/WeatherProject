// Se importan los estilos
require('./index.css');

// Importamos la clase UI desde el archivo UI
const { UI } = require('./UI'); 

 // Se crea una nueva instancia Weather
 const ui = new UI();

 // Importamos la clase weather desde el archivo wheater.js
 const { Weather } = require('./weather');

 // Se crea una nueva instancia Weather
 const weather = new Weather(city, countryCode);

// Importamos la clase store desde el archivo store
const { Store } = require('./store');

// Se crea una nueva instancia store
const store = new Store();
const { city, countryCode } = store.getLocationData();
    
    // Se crea la funcion asincronica fetchWeather
    async function fetchWeather () {
        const data = await weather.getWeather();
        console.log(data);
        ui.render(data);
}

// Se obtiene el elemento del boton, se escucha el evento y se realiza una funcion

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    // Se obtiene los elementos de ciudad y codigo del pais
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    weather.changeLocation(city, countryCode);
    store.setlocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
})

// Se escucha el evento y se corre la funcion
document.addEventListener('DOMContentLoaded', fetchWeather);