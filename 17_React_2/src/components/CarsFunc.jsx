import React from "react";

function CarFunc(props) {
    return (
        <div className={props.cardStyle}>
            <h2>{props.model}</h2>
            <h3>{props.manuf}</h3>
            <h4>{props.year}</h4>
            <p>{props.vin}</p>
        </div>
    )
}
export default CarFunc;