import type {FC} from "react";
import {type NavItem, navItems} from "../navItems.ts";
import {NavItem as NavItemComponent} from "./NavItem";


export const Navigation: FC = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navItems.map((item: NavItem) =>
                    <NavItemComponent key={item} text={item}/>)
                }
            </ul>
        </nav>
    );
};
