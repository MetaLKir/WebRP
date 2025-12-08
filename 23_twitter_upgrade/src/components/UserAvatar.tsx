// import type {User} from "../types";
import {TwitterContext} from "../utils/twitterContext";
import {type FC, useContext} from "react";
import type {UserAvatarProps} from "../types";


export const UserAvatar: FC<UserAvatarProps> = ({size = "normal"}: { size?: string }) => {
    const value = useContext(TwitterContext);
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
};
