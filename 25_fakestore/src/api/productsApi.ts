import {storeApi} from "./storeApi.ts";

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
}

export const getAllProducts = async () => {
    const res = await storeApi.get<Product[]>("/products");
    return res.data;
}