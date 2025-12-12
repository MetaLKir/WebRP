export const storePages = {
    Login: "Login",
    Items: "Items",
} as const;
export type StorePage = (typeof storePages)[keyof typeof storePages];