import type {FC} from "react";
import type {NavItem} from "../navItems.ts";
import {Navigation} from "./Navigation.tsx";

interface HeaderProps {
    activePage: NavItem;
    changePage: (page: NavItem) => void;
}

export const Header:FC<HeaderProps> = ({activePage, changePage}) => {
    return (
        <header className="header">
            <h1 className="header-title">Campus Portal</h1>
            <Navigation
            activePage={activePage}
            changePage={changePage}
            />
        </header>
    );
};