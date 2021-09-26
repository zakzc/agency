import React, { useState } from "react";
// assets
import hamburger from "../assets/svgs/icon_hamburguer.svg";
import plane from "../assets/svgs/paper-plane.svg";
import search from "../assets/svgs/search-solid.svg";
import bag from "../assets/svgs/shopping-bag-solid.svg";

export default function NavBar() {
  const [popUp, setPopUp] = useState(false);
  console.log("pop", popUp);

  const PopUpBox = () => {
    return <p className="pop-up-box"> This is the popup text...</p>;
  };

  const PopUpButton = () => {
    return (
      <li>
        <button className="nav-button" onClick={() => setPopUp(!popUp)}>
          <img src={hamburger} alt="hamburger menu" className="nav-svg" />
          <span
            style={popUp ? { visibility: "show" } : { visibility: "hidden" }}
          >
            <PopUpBox />
          </span>
        </button>
      </li>
    );
  };

  const MiniNav = () => {
    return (
      <div className="mini-nav">
        <li>
          <span>
            <img src={plane} alt="contato" className="nav-svg" />
            Contato
          </span>
        </li>
        <li>
          <span>
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
