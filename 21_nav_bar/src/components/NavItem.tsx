import type {FC} from "react";
import {type NavItem as NavItemType} from "../navItems.ts";
import {NavLink} from "react-router-dom";
import {routesNavItem} from "../routingConfig.ts";


interface NavItemProps {
    text: NavItemType;
    // isActive: boolean;
    // changePage: (page: NavItemType) => void;
}


export const NavItem: FC<NavItemProps> = ({text}) => {
    return (
        <li>
            <NavLink to={routesNavItem[text]}
                     className={({isActive}) =>
                         isActive ? "nav__item--active" : "nav__item"}
            >
                {text}
            </NavLink>
        </li>

//     <li className={`nav__item ${isActive ? "nav__item--active" : ""}`}
        //     onClick={handleClick}
        // >
        //     {text}
        // </li>
    );
};
