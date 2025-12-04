// import type {Stats, User} from "../types";
import {TwitterContext, type TwitterContextValue} from "../utils/twitterContext.ts";
import UserAvatar from "./UserAvatar.tsx";


const UserStats = () => {
    return (
        <TwitterContext.Consumer>
            {(value: TwitterContextValue | null) => {
                if (!value) return <p>No context</p>
                const {user, stats} = value;

                return (
                    <div className="user-stats">
                        <div>
                            <UserAvatar/>
                            {user.name}
                        </div>
                        <div className="stats">
                            <div>Followers: {stats.followers}</div>
                            <div>Following: {stats.following}</div>
                        </div>
                    </div>
                );
            }}
        </TwitterContext.Consumer>
    );
};

export default UserStats;