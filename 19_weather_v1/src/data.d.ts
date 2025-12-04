export interface WeatherInfo {
    temp: number | null;
    city: string | null;
    country: string | null;
    pressure: number | null;
    sunset: number | null;
    error: string | null;
}

export interface DataState {
    weatherInfo: WeatherInfo;
}

export interface WeatherProps {
    weather: WeatherInfo;
}

export interface FormProps {
    getWeather: (city: string | null) => void;
}

export interface DataProps {

}

export interface FormControlProps {
    getWeather: (city: string | null) => void;
}

export interface FormControlState {
    city: string;
}
