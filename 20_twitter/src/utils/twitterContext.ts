import type {Stats, User} from "../types";
import {createContext} from "react";


export interface TwitterContextValue {
    user: User;
    stats: Stats;
    changeAvatar: (url: string) => void;
    changeName: (name: string) => void;
    changeStats: (StatsType: "followers" | "following", delta: number) => void;
}

export const TwitterContext =
    createContext<TwitterContextValue | null>(null);