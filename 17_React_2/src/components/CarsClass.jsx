import React from "react";

class CarClass extends React.Component {
    render() {
        const { cardStyle, model, manuf, year, vin } = this.props;
        return (
            <div className={cardStyle}>
                <h2>{model}</h2>
                <h3>{manuf}</h3>
                <h4>{year}</h4>
                <p>{vin}</p>
            </div>
        )
    }
}

export default CarClass;