import {useEffect, useState} from "react";

export function useLocalStorageState<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue;
        try {
            const stored = window.localStorage.getItem(key);
            if (!stored) return initialValue;
            return JSON.parse(stored);
        } catch (e) {
            console.error('parse error for key ${key}: ', e);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('can not save key ${key}: ', e);
        }
    }, [key, value]);
    return [value, setValue] as const;
}