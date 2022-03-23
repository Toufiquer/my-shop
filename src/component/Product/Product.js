import React from "react";
import "./Product.css";
const Product = ({ product }) => {
    let { name, price, ratings, img } = product;
    console.log(product);
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="details">
                <h2>{name}</h2>
                <h2>Price: ${price} </h2>
                <h5>Rating {ratings} Star</h5>
            </div>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;
