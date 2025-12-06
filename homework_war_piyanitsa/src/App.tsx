import {useState} from "react";
import {type GameStage, GameStages} from "./types.ts";
import {StartStage} from "./components/Stage/StartStage.tsx";
import {CombatStage} from "./components/Stage/CombatStage.tsx";
import {EndStage} from "./components/Stage/EndStage.tsx";

export function App() {
    const [currentStage, setCurrentStage] = useState<GameStage>(GameStages.Start);
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const [winner, setWinner] = useState("");
    const [winnerPickups, setWinnerPickups] = useState(0);
    const [loserPickups, setLoserPickups] = useState(0);
    const [twoBeatsAce, setTwoBeatsAce] = useState(false);


    const startCombat = (player1: string, player2: string, sixBeatsAce: boolean) => {
        setPlayer1Name(player1);
        setPlayer2Name(player2);
        setTwoBeatsAce(sixBeatsAce)
        setCurrentStage(GameStages.Combat);
    };

    const gameResult = (winner: string, winnerPickups: number, loserPickups: number) => {
        setWinner(winner);
        setWinnerPickups(winnerPickups);
        setLoserPickups(loserPickups)
        setCurrentStage(GameStages.End);
    }

    const restartGame = () => {
        setCurrentStage(GameStages.Start);
    };

    return (
        <div>
            {currentStage === GameStages.Start && <StartStage start={startCombat}/>}
            {currentStage === GameStages.Combat &&
                (<CombatStage player1Name={player1Name} player2Name={player2Name} twoBeatsAce={twoBeatsAce}
                              endCombat={gameResult}/>)}
            {currentStage === GameStages.End &&
                (<EndStage winner={winner} winnerPickups={winnerPickups} loserPickups={loserPickups}
                           restart={restartGame}/>)}
        </div>
    );
}

