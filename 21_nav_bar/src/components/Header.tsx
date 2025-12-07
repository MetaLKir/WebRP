import type {FC} from "react";
import {Navigation} from "./Navigation.tsx";


export const Header:FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Campus Portal</h1>
            <Navigation/>
        </header>
    );
};