import {type CardProps, Ranks, type Suit, type Rank, Suits} from "./types.ts";


const suits: Suit[] = [...Suits];
const ranks: Rank[] = Array.from({length: 13}, (_e, i) => (i + 2) as Rank);

const rankFileNames: Record<number, string> = {
    [Ranks.Jack]: "J",
    [Ranks.Queen]: "Q",
    [Ranks.King]: "K",
    [Ranks.Ace]: "A"
};

export function createDeck(): CardProps[] {
    const result: CardProps[] = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            const suffix = rankFileNames[rank] ?? rank;
            result.push({
                value: rank,
                suit: suit,
                face: `src/assets/Cards/${suit[0]}${suffix}.png`,
                back: "src/assets/Cards/Back_Blue.png"
            })
        }
    }
    return result;
}

export function shuffleDeck(array: CardProps[]): CardProps[] {
    return [...array].sort(() => Math.random() - 0.5);
}