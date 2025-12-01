import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {Component} from "react";
import type {DataProps, DataState} from "../data";
import {API_KEY, BASE_URL} from "../utils/constants.ts";

class Data extends Component<DataProps, DataState> {
    constructor(props: DataProps) {
        super(props);
        this.state = {
            weatherInfo: {
                temp: null,
                city: null,
                country: null,
                pressure: null,
                sunset: null,
            }
        }
    }

    getWeather = async (city_: string | null) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${city_}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            this.setState({
                weatherInfo: {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset,
                }
            })
        } catch (e) {
            if (e instanceof Error) {
                console.error(e);
            } else {
                console.error("Unknown error");
            }
        }
    }

    render() {
        return <div>
            <Form getWeather={this.getWeather}/>
            <Weather weather={this.state.weatherInfo}/>
        </div>
    }
}

export default Data;