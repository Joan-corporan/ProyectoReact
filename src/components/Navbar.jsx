import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <header className=" bagC ">
                <div className="div2navF">
                    <a href="/">
                        <img
                            src="../../public/assets/images/imgL.png"
                            alt="logo"
                        />
                    </a>
                    <span>
                        <a href="/">C&B</a>{" "}
                    </span>
                </div>
                <nav className="navbar navbar-expand-sm ">
                    <ul className="navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink className="navC nav-item nav-link" to="/">
                                Sobre Nosotros
                            </NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink
                                className="navC nav-item nav-link"
                                to="nmenu"
                            >
                                Nuestro Menú
                            </NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink
                                className="navC nav-item nav-link"
                                to="reserva"
                            >
                                Reservaciones
                            </NavLink>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
