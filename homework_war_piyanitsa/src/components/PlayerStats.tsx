import type {FC} from "react";

type PlayerStatsProps = {
    name: string;
    remain: number;
    pickups: number;
}

export const PlayerStats: FC<PlayerStatsProps> = ({name, remain, pickups}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Remain: {remain} </p>
            <p>Pickups: {pickups}</p>
        </div>
    );
};