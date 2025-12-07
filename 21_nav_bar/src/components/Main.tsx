import type {FC} from "react";
import {type NavItem, navItems} from "../navItems.ts";
import {Route, Routes } from "react-router-dom";
import {componentsNavItem, routesNavItem} from "../routingConfig.ts";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";


const Main: FC = () => {
    return(
    <Routes>
        {navItems.map((i: NavItem) => {
            const path = routesNavItem[i];
            const PageComponent = componentsNavItem[i];
            return (<Route
                key={i}
                path={path}
                element={<PageComponent/>}/>)
        })}
        <Route path={"*"} element={<NotFoundPage/>}/>
    </Routes>
    )
};

export default Main;