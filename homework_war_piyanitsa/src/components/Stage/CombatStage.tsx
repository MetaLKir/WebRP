import {type FC, useEffect, useState} from "react";
import {type CardProps, Ranks} from "../../types.ts";
import {createDeck, shuffleDeck} from "../../data.ts";
import {Player} from "../Player.tsx";

type CombatStageProps = {
    player1Name: string;
    player2Name: string;
    twoBeatsAce: boolean;
    endCombat: (winner: string, winnerPickups: number, loserPickups: number) => void;
};

export const CombatStage: FC<CombatStageProps> = (props) => {
    const {player1Name, player2Name, twoBeatsAce, endCombat} = props;

    const shuffledDeck = shuffleDeck(createDeck());
    const half = shuffledDeck.length / 2;

    const [player1Deck, setPlayer1Deck] = useState<CardProps[]>(shuffledDeck.slice(0, half));
    const [player2Deck, setPlayer2Deck] = useState<CardProps[]>(shuffledDeck.slice(half));
    // ===== LINES FOR TESTING (instead of the two lines above) =====
    // const [player1Deck, setPlayer1Deck] = useState<CardProps[]>(shuffledDeck.slice(0, 2));
    // const [player2Deck, setPlayer2Deck] = useState<CardProps[]>(shuffledDeck.slice(2, 4));
    const [roundPool, setRoundPool] = useState<CardProps[]>([]);
    const [player1Pickups, setPlayer1Pickups] = useState(0);
    const [player2Pickups, setPlayer2Pickups] = useState(0);

    const playRound = () => {
        const newPlayer1Deck = [...player1Deck];
        const newPlayer2Deck = [...player2Deck];
        const newCombatPool = [...roundPool];

        const firstPlayerCard = newPlayer1Deck.shift();
        const secondPlayerCard = newPlayer2Deck.shift();
        if (!firstPlayerCard || !secondPlayerCard) return;

        let twoVsAce = false;
        let aceVsTwo = false;
        if (twoBeatsAce) {
            twoVsAce = firstPlayerCard.value === Ranks.Two && secondPlayerCard.value === Ranks.Ace;
            aceVsTwo = firstPlayerCard.value === Ranks.Ace && secondPlayerCard.value === Ranks.Two;
        }

        if (firstPlayerCard.value > secondPlayerCard.value || twoVsAce) {
            newPlayer1Deck.push(secondPlayerCard, firstPlayerCard, ...newCombatPool);
            setPlayer1Pickups(e => ++e);
            setRoundPool([]);
        } else if (secondPlayerCard.value > firstPlayerCard.value || aceVsTwo) {
            newPlayer2Deck.push(firstPlayerCard, secondPlayerCard, ...newCombatPool);
            setPlayer2Pickups(e => ++e);
            setRoundPool([]);
        } else {
            newCombatPool.push(firstPlayerCard, secondPlayerCard);
            setRoundPool(newCombatPool);
        }
        setPlayer1Deck(newPlayer1Deck);
        setPlayer2Deck(newPlayer2Deck);
    };

    useEffect(() => {
        if (player1Deck.length === 0) {
            endCombat(player2Name, player2Pickups, player1Pickups);
        } else if (player2Deck.length === 0) {
            endCombat(player1Name, player1Pickups, player2Pickups);
        }
    }, [endCombat, player1Deck, player1Name, player1Pickups, player2Deck, player2Name, player2Pickups]);
    
    // if (player1Deck.length === 0) {
    //     endCombat(player2Name, player2Pickups, player1Pickups);
    // } else if (player2Deck.length === 0) {
    //     endCombat(player1Name, player1Pickups, player2Pickups);
    // }

    return (
        <div>
            <div className={"table"}>
                <Player name={player1Name} deck={player1Deck} pickups={player1Pickups}/>
                <div className={"combat-controller"}>
                    <button onClick={playRound}>Next Round</button>
                    <p>Round pool: {roundPool.length} cards</p>
                </div>
                <Player name={player2Name} deck={player2Deck} pickups={player2Pickups}/>
            </div>
        </div>
    );
};
