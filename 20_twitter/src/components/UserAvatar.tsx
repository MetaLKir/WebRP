// import type {User} from "../types";
import {TwitterContext, type TwitterContextValue} from "../utils/twitterContext";


const UserAvatar = ({size = "normal"}: { size?: string }) => {
    return (
        <TwitterContext.Consumer>
            {(value: TwitterContextValue | null) => {
                if (!value) return <p>No context</p>
                const {user, changeAvatar, changeName} = value;
                return (
                    <img src={user.avatar}
                         alt={user.name}
                         className={`user-avatar ${size ?? ""}`}
                         onClick={() => {
                             const url = prompt("Enter new avatar url");
                             changeAvatar(url);

                         }}
                         onContextMenu={(e) => {
                             e.preventDefault();
                             const name = prompt("Enter new name");
                             changeName(name);
                         }}
                    />
                )
            }}
        </TwitterContext.Consumer>
    );
};

export default UserAvatar;