// Exportamos la clase para importarla en el index
export class Store {
    // Metodo constructor (se ejecuta solo)
    constructor()
    {
        this.city;
        this.countryCode;
        // Se definen los valores predeterminados del aplicativo
        this.defaultCity = 'Medellin';
        this.defaultCountry = 'CO';
    }

    // Metodo para traer del localstorage la informacion antes guardada
    getLocationData()
    {
        if (localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        return{
            city: this.city,
            countryCode: this.countryCode
        }
    }

    // Metodo para guardar informacion en el localstorage
    setlocationData(city, countryCode)
    {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}