import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <header className=" bagC ">
                <div className="div2navF">
                    <a href="/">
                        <img
                            src="/assets/images/img-pages/imgL.png"
                            alt="logo"
                        />
                    </a>
                    <span>
                        <a href="/">Comer&Beber</a>
                    </span>
                    <span>
                        <a className="respn" href="/">C&B</a>
                    </span>
                </div>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container  centerB">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#nav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="collapse navbar-collapse" id="nav">
                            <div className="navbar-nav">
                                <NavLink
                                    className="navC nav-item nav-link"
                                    to="/"
                                >
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
                    </div>
                </nav>
            </header>
        </div>
    );
};
