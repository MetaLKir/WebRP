import * as React from "react";
import type {FormProps} from "../data";

const Form = ({getWeather}: FormProps) => {

    const handleGetCitySubmit =
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); // prevents default rerendering all page on form submit

            const city_ = e.currentTarget.city.value.trim();
            console.log("City: ", city_);
            getWeather(city_);
        };

    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type="text" placeholder="City" name="city"/>
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;