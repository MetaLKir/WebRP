import './App.css'
import {type FC, useMemo, useState} from "react";
import type {Stats, User} from "./types";
import {Nav} from "./components/Nav.tsx";
import Body from "./components/Body.tsx";
import {TwitterContext, type TwitterContextValue} from "./utils/twitterContext.ts";

const INITIAL_USER: User = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfsiH_kysGmL7LRFjLS0iMiW2URJsVyjkTg&s",
    name: "Billy"
}
const INITIAL_STATS: Stats = {
    followers: 1000,
    following: 100,
}

export const App: FC = () => {
    const [user, setUser] = useState<User>(INITIAL_USER);
    const [stats, setStats] = useState<Stats>(INITIAL_STATS);


    const changeAvatar = (url: string | null) => {
        setUser(
            (prev: User) => ({
                ...prev, avatar: url || prev.avatar
            })
        );
    };


    const changeName = (name: string | null) => {
        setUser(
            (prev: User) => ({
                ...prev, name: name || prev.name
            })
        );
    };


    const changeStats = (type: ("followers" | "following"), delta: number) => {
        setStats(
            (prev: Stats) => {
                const newStats = {...prev};
                const current = newStats[type] + delta;
                newStats[type] = current < 0 ? 0 : current;
                return newStats;
            }
        )
    };

    const contextValue: TwitterContextValue = useMemo(() => ({
        user,
        stats,
        changeAvatar,
        changeName,
        changeStats,
    }), [user, stats]);

    return (
        <div className="app">
            <TwitterContext.Provider value={contextValue}>
                <Nav/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

