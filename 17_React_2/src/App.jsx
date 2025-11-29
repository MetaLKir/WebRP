import {cars} from "./data/constants";
import CarClass from "./components/CarsClass";
import CarFunc from "./components/CarsFunc";
import React from "react";

function App() {
    return (
        <div>
            <div className={"row"}>
                {cars.map(c =>
                    <CarClass key={c.vin} vin={c.vin} model={c.model}
                              manuf={c.manuf} year={c.year}
                              cardStyle={"carCard"}/>)}
            </div>
            <div className={"row"}>
                {cars.map((c, index) =>
                    <CarFunc key={index} {...c} cardStyle={"carCard"}/>)}
            </div>
        </div>
    )
}

export default App;