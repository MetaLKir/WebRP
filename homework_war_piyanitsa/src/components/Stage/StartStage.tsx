import {type FC, useState} from "react";

type StartStageProps = {
    start: (player1Name: string, player2Name: string, twoBeatsAce: boolean) => void;
};

export const StartStage: FC<StartStageProps> = ({start}) => {
    const [player1, setPlayer1] = useState("Alliance");
    const [player2, setPlayer2] = useState("Horde");
    const [twoBeatsAce, setTwoBeatsAce] = useState(false);

    return (
        <div className={"start"}>
            <div>
                <input type="text"
                       placeholder='First player name'
                       value={player1}
                       onChange={e => setPlayer1(e.target.value)}/>
                <input type="text"
                       placeholder='Second player name'
                       value={player2}
                       onChange={e => setPlayer2(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="sixVsAce">Should "Two" beat "Ace"?</label>
                <input type="checkbox" id="sixVsAce" checked={twoBeatsAce}
                       onChange={e => setTwoBeatsAce(e.target.checked)}/>
            </div>
            <div>
                <button onClick={() => start(player1, player2, twoBeatsAce)}>Start</button>
            </div>
        </div>
    );
};