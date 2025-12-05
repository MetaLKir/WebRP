export const navItems = [
    "Home",
    "Schedule",
    "Library",
    "Contacts"
] as const;
export type NavItem = (typeof navItems)[number];
// modern way replacing constructions below

//=======================
// export enum NavItemsEnum {
//     Home = "Home",
//     Schedule = "Schedule",
//     Library = "Library",
//     Contacts = "Contacts",
// }
//
// export type NavItemsType = | "Home" | "Schedule" | "Library" | "Contacts";
//=======================
