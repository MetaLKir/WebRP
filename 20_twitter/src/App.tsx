import './App.css'
import {Component} from "react";
import type {AppProps, AppState} from "./types";
import Nav from "./components/Nav.tsx";
import Body from "./components/Body.tsx";
import {TwitterContext, type TwitterContextValue} from "./utils/twitterContext.ts";


class App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            user: {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfsiH_kysGmL7LRFjLS0iMiW2URJsVyjkTg&s",
                name: "Billy"
            },
            stats: {
                followers: 1000,
                following: 100,
            }
        }
    }

    private changeAvatar: (url: string) => void;
    private changeName: (name: string) => void;
    private changeStats: (StatsType: ("followers" | "following"), delta: number) => void;

    render() {
        const contextValue: TwitterContextValue = {
            user: this.state.user,
            stats: this.state.stats,
            changeAvatar: this.changeAvatar,
            changeName: this.changeName,
            changeStats: this.changeStats,
        }
        return (
            <div className="app">
                <TwitterContext.Provider value={contextValue}>
                    <Nav/>
                    <Body/>
                </TwitterContext.Provider>
            </div>
        )
    }

}

export default App
