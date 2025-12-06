import type {FC} from "react";
import type {CardProps} from "../types.ts";
import {PlayerStats} from "./PlayerStats.tsx";
import {Card} from "./Card.tsx";


type PlayerProps = {
    name: string;
    deck: CardProps[];
    pickups: number;

};

export const Player: FC<PlayerProps> = ({name, deck, pickups}) => {
    return (
        <div className={"player"}>
            <Card {...deck[0]}/>
            <PlayerStats name={name} remain={deck.length} pickups={pickups}/>
        </div>
    );
};
