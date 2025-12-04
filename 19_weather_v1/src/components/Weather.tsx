import type {WeatherProps} from "../data";

const Weather = ({weather}: WeatherProps) => {
    if (!weather.city) {
        return <p>{weather.error ?? "Please enter city name"}</p>
    }

    return (
        <div>
            <p>Location: {weather.country}, {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {weather.sunset && new Date(weather.sunset * 1000).toTimeString().slice(0, 5)}</p>
        </div>
    ); // Sunset: what && how
};

export default Weather;