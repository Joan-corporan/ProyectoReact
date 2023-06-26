import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header className=" bagC ">
        <div>
        <img src={"../"} alt="  " />
          <h2>Logo</h2>
        </div>
        <nav className='navbar navbar-expand-sm '> 
          <ul className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink className='navC nav-item nav-link' to="/">Sobre Nosotros</NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink className='nav-item nav-link' to="nmenu">Nuestro Menú</NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink className='nav-item nav-link' to="reserva">Reservaciones</NavLink>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};
