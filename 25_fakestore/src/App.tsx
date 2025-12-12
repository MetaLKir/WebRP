import {Route, Routes} from "react-router-dom";
import './css/Items.css'
import './css/LoginForm.css'
import {componentsStorePage, routesStorePage} from "./types_configs/routingConfig.ts";
import {NotFoundPage} from "./components/pages/NotFoundPage.tsx";

export const App = () => {
    return (
        <Routes>
            <Route path={routesStorePage.Login} element={<componentsStorePage.Login/>}/>
            <Route path={routesStorePage.Items} element={<componentsStorePage.Items/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    )
}
