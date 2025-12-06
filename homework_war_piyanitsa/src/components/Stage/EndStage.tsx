import type {FC} from "react";

type EndStageProps = {
    winner: string;
    winnerPickups: number;
    loserPickups: number;
    restart: () => void;
}

export const EndStage: FC<EndStageProps> = (props) => {
    const {winner, winnerPickups, loserPickups, restart} = props;

    return (
        <div className={"end"}>
            <h1>The End</h1>
            <h2>{winner} won!!!</h2>
            <h2>Pickups score: winner {winnerPickups} vs {loserPickups} loser!!!</h2>
            <button onClick={restart}>Restart</button>
        </div>
    );
};
