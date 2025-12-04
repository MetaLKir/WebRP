// import type {User} from "../types";
import {TwitterContext, type TwitterContextValue} from "../utils/twitterContext";


const UserAvatar = ({size = "normal"}: { size?: string }) => {
    return (
        <TwitterContext.Consumer>
            {(value: TwitterContextValue | null) => {
                if (!value) return <p>No context</p>
                return (
                    <img src={value.user.avatar}
                         alt={value.user.name}
                         className={`user-avatar ${size ?? ""}`}/>
                )
            }}
        </TwitterContext.Consumer>
    );
};

export default UserAvatar;