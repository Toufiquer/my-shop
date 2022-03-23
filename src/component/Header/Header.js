import React from "react";
import logo from "../../img/Logo.svg";
import "./Header.css";
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
                <a href="/Order">Order</a>
            </nav>
        </header>
    );
};

export default Header;
