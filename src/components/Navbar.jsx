import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header>
        <div><h2>Logo</h2></div>
        <nav>
          <ul>
           
            <div>
              <NavLink to="/">Sobre Nosotros</NavLink>
            </div>
            <div>
              <NavLink to="nmenu">Nuestro Menú</NavLink>
            </div>
            <div>
              <NavLink to="reserva">Reservaciones</NavLink>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};
