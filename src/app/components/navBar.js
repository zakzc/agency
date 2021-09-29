import React, { useState } from "react";
// assets
import hamburger from "../assets/svgs/icon_hamburguer.svg";
import plane from "../assets/svgs/paper-plane.svg";
import search from "../assets/svgs/search-solid.svg";
import bag from "../assets/svgs/shopping-bag-solid.svg";
// components
import NavbarPopup from "./navBarPopUp";

export default function NavBar() {
  const [popUp, setPopUp] = useState(false);

  const PopUpButton = () => {
    return (
      <li>
        <button className="nav-button" onClick={() => setPopUp(!popUp)}>
          <img src={hamburger} alt="hamburger menu" className="nav-svg" />
          <span
            style={popUp ? { visibility: "show" } : { visibility: "hidden" }}
          >
            <NavbarPopup />
          </span>
        </button>
      </li>
    );
  };

  const MiniNav = () => {
    return (
      <div className="mini-nav">
        <li>
          <span className="mini-nav-text">
            <img src={plane} alt="contato" className="nav-svg" />
            Contato
          </span>
        </li>
        <li>
          <span className="mini-nav-text">
            <img src={search} alt="busca" className="nav-svg" />
            Busca
          </span>
        </li>
        <li>
          <span className="shopping-bag">
            <img src={bag} alt="sacola de compras" className="nav-svg" />
          </span>
        </li>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <ul className="nav-bar-contents">
        <PopUpButton />
        <MiniNav />
      </ul>
    </div>
  );
}
