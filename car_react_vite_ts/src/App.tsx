import type {Car} from "./types";
import {cars} from "./data/constants.ts";
import CarFunc from "./components/CarsFunc.tsx";
import CarClass from "./components/CarsClass.tsx";

function App() {
    return (
        <div>
            <div className={"row"}>
                {cars.map((c: Car) =>
                    <CarClass key={c.vin} car={c}/>)}
            </div>
            <div className={"row"}>
                {cars.map((c: Car) =>
                    <CarFunc key={c.vin} car={c}/>)}
            </div>
        </div>
    )
}

export default App;
