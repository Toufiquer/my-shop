import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
    return (
        <div className="products-container">
            <div className="products">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            <div className="cart-container">
                <div className="cart">Total Item:</div>
            </div>
        </div>
    );
};

export default Products;
