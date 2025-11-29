import type {Car} from "../types";
import type {FC} from "react";

type Props = { car: Car };

const CarFunc:FC<Props> = (props) => {
    const {model, manuf, year, vin} = props.car;
    return (
        <div className={"carCard"}>
            <h2>{model}</h2>
            <h3>{manuf}</h3>
            <h4>{year}</h4>
            <p>{vin}</p>
        </div>
    )
}
export default CarFunc;