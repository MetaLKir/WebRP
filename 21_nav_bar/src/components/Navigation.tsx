import type {FC} from "react";
import {type NavItem, navItems} from "../navItems.ts";
import {NavItem as NavItemComponent} from "./NavItem";

interface NavigationProps {
    activePage: NavItem;
    changePage: (page: NavItem) => void;
}

export const Navigation:FC<NavigationProps> = ({activePage, changePage}) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navItems.map((item) =>
                <NavItemComponent
                    key={item}
                    text = {item}
                    isActive={item===activePage}
                    changePage={changePage}
                    />)}
            </ul>
        </nav>
    );
};
