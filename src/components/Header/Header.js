import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="title">Новинник</div>
            <nav>
                <NavLink to={"/"}>
                    Головна
                </NavLink>
                <NavLink to={"/news"}>
                    Новини
                </NavLink>
                <NavLink to={"/contacts"}>
                    Контакти
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;