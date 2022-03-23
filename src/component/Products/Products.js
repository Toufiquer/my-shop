import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
    const [products, SetProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, []);
    return (
        <div className="products-container">
            <div className="products">
                {products.map(product => (
                    <Product product={product}></Product>
                ))}
            </div>
            <div className="cart-container">
                <div className="cart">Total Item:</div>
            </div>
        </div>
    );
};

export default Products;
