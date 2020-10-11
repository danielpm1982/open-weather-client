export default interface WeatherInfoObjInterface{
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        { description: string,
        icon: string,
        id: number,
        main: string }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

/* 
This is the interface for the response object that will store the data received
from the currentWeather REST service, which will be imported and used at the 
CurrentWeather and CurrentWeatherResponse views and at their Vue subcomponents
*/
