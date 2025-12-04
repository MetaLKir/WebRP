export interface User {
    avatar: string;
    name: string;
}

export interface Stats {
    followers: number;
    following: number;
}

export interface AppState {
    user: User;
    stats: Stats;
}

export interface AppProps{}

export interface UserAvatarProps{
    size?: "small" | "normal";
}