export const GameStages = {
    Start: "Start",
    Combat: "Combat",
    End: "End"
} as const;
export type GameStage = (typeof GameStages)[keyof typeof GameStages];

export const Ranks = {
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14
} as const;
export type Rank = (typeof Ranks)[keyof typeof Ranks];

export const Suits = ["Spades", "Hearts", "Clubs", "Diamonds"] as const;
export type Suit = (typeof Suits)[number];

export type CardProps = {
    value: Rank;
    suit: Suit;
    face: string;
    back?: "src/assets/Cards/Back_Blue.png";
}

