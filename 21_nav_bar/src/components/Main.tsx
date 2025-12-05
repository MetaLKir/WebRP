import type {FC} from "react";
import type {NavItem} from "../navItems.ts";
import ContactsPage from "./pages/ContactsPage.tsx";
import SchedulePage from "./pages/SchedulePage.tsx";
import LibraryPage from "./pages/LibraryPage.tsx";
import HomePage from "./pages/HomePage.tsx";

interface MainProps {
    page: NavItem;
}

const pageComponents: Record<NavItem, FC> ={
    Home: HomePage,
    Schedule: SchedulePage,
    Library: LibraryPage,
    Contacts: ContactsPage,
}

const Main: FC<MainProps> = ({page}) => {
    // switch (page) {
    //     case "Schedule":
    //         return <SchedulePage/>
    //     case "Contacts":
    //         return <ContactsPage/>
    //     case "Library":
    //         return <LibraryPage/>
    //     case "Home":
    //     default:
    //         return <HomePage/>
    // }
    const PageComponent = pageComponents[page];
    return <PageComponent/>
};

export default Main;