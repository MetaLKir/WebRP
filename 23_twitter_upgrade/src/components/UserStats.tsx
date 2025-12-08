// import type {Stats, User} from "../types";
import {TwitterContext} from "../utils/twitterContext.ts";
import {UserAvatar} from "./UserAvatar.tsx";
import {type FC, useContext} from "react";


export const UserStats: FC = () => {
    const value = useContext(TwitterContext);
    if (!value) return <p>No context</p>
    const {user, stats, changeStats} = value;

    return (
        <div className="user-stats">
            <div>
                <UserAvatar/>
                {user.name}
            </div>
            <div className="stats">
                <div onClick={() => changeStats("followers", 1)}
                     onContextMenu={(e) => {
                         e.preventDefault();
                         changeStats("followers", -1)
                     }}>
                    Followers: {stats.followers}
                </div>
                <div onClick={() => changeStats("following", 1)}
                     onContextMenu={(e) => {
                         e.preventDefault();
                         changeStats("following", -1)
                     }}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};