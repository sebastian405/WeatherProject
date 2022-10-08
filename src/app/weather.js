// Exportamos la clase para poder importarla en el index
export class Weather {
    // Metodo constructor (se ejecuta solo)
    constructor(city, countryCode) {
        this.apikey = '1afb9dc9ea90f0375efe954e86a3dd01';
        this.city = city;
        this.countryCode = countryCode;
    }
    // Metodo asincronico y dentro un await (Que la peticion puede tardar)
    async getWeather() {
        // URL de la api
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        // Se hace la peticion con fetch y await es para especificar que puede tardar
        const response = await fetch(URL);

        const data = await response.json();
        return data;

    }

    // Metodo para cambiar la ciudad consultada
    changeLocation(city, countryCode)
    {
        this.city = city;
        this.countryCode = countryCode;
    }
}