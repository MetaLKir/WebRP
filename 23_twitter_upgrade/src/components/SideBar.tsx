// import type {Stats, User} from "../types";
import {UserStats} from "./UserStats.tsx";


export const SideBar = () => {
    return (
        <div className="side-bar">
            <UserStats/>
        </div>
    );
};