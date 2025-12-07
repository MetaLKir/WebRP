import type {NavItem} from "./navItems.ts";
import type {ComponentType} from "react";
import HomePage from "./components/pages/HomePage.tsx";
import SchedulePage from "./components/pages/SchedulePage.tsx";
import LibraryPage from "./components/pages/LibraryPage.tsx";
import ContactsPage from "./components/pages/ContactsPage.tsx";

export const routesNavItem: Record<NavItem, string> = {
    Home: "/",
    Schedule: "/schedule",
    Library: "/library",
    Contacts: "/contacts",
}

export const componentsNavItem: Record<NavItem, ComponentType> = {
    Home: HomePage,
    Schedule: SchedulePage,
    Library: LibraryPage,
    Contacts: ContactsPage,
}