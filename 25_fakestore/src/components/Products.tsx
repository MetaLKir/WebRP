import {getAllProducts, type Product} from "../api/productsApi.ts";
import {useEffect, useState} from "react";

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts(); // ждём Promise
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div className={"card-grid"}>
                {products.map((product: Product) => (
                    <div key={product.id} className={"card"}>
                        <img src={product.image} alt={"image"} className={"card-img"}/>
                        <h3 className={"card-title"}>{product.title}</h3>
                        <p className={"card-price"}>Price: {product.price}$</p>
                        <p className={"card-category"}>Category: {product.category}</p>
                        <p className={"card-description"}>{product.description}</p>
                    </div>
                ))}
        </div>
    );
};
