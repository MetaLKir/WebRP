import type {Stats, User} from "../types";
import {createContext} from "react";


export interface TwitterContextValue {
    user: User;
    stats: Stats;
    changeAvatar: (url: string | null) => void;
    changeName: (name: string | null) => void;
    changeStats: (StatsType: "followers" | "following", delta: number) => void;
}

export const TwitterContext =
    createContext<TwitterContextValue | null>(null);