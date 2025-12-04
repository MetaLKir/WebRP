import * as React from "react";
import {Component} from "react";
import type {FormControlProps, FormControlState} from "../data";


// controlled version of Form.tsx
class FormControl extends Component<FormControlProps, FormControlState> {
    constructor(props: FormControlProps) {
        super(props);
        this.state = {city: ""}
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({city: event.target.value});
    }

    handleClick = () => {
        this.props.getWeather(this.state.city);
        this.setState({city: ""});
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.city}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="City"/>
                <button onClick={this.handleClick}>Get weather</button>
            </div>
        )
    }
}

export default FormControl;