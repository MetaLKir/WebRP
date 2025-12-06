import {type CardProps} from "../types";
import type {FC} from "react";

export const Card: FC<CardProps> = (props) => {
    return (
        <div>
            <img src={props.face} alt={"card"} className={"card"}/>
        </div>
    );
};
