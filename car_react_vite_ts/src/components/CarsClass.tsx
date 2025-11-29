import {Component} from "react";
import type {Car} from "../types";

type Props = { car: Car };

class CarClass extends Component<Props> {
    render() {
        const {model, manuf, year, vin} = this.props.car;
        return (
            <div className={"carCard"}>
                <h2>{model}</h2>
                <h3>{manuf}</h3>
                <h4>{year}</h4>
                <p>{vin}</p>
            </div>
        )
    }
}

export default CarClass;