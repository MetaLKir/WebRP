import type {FC, MouseEvent} from "react";
import {type NavItem as NavItemType} from "../navItems.ts";


interface NavItemProps {
    text: NavItemType;
    isActive: boolean;
    changePage: (page: NavItemType) => void;
}


export const NavItem: FC<NavItemProps> = ({text, isActive, changePage}) => {
    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        changePage(text);
    }
    return (
        <li className={`nav__item ${isActive ? "nav__item--active" : ""}`}
            onClick={handleClick}
        >
            {text}
        </li>
    );
};
