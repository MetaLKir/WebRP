import type {ComponentType} from "react";
import type {StorePage} from "./types.ts";
import {LoginPage} from "../components/pages/LoginPage.tsx";
import {ItemsPage} from "../components/pages/ItemsPage.tsx";


export const routesStorePage: Record<StorePage, string> = {
    Login: "/",
    Items: "/items",
}

export const componentsStorePage: Record<StorePage, ComponentType> = {
    Login: LoginPage,
    Items: ItemsPage,
}