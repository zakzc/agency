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
    return (
      <div className="pop-up-box">
        <table className="drop-menu">
          <tr>
            <th>Luta</th>
            <th>Ação/Aventura</th>
            <th>Corrida</th>
          </tr>
          <tr>
            <td>Mortal Kombat</td>
            <td>GTA V</td>
            <td>Need for Speed</td>
          </tr>
          <tr>
            <td>Smash Bros</td>
            <td>Tomb Raider</td>
            <td>Forza Horizon</td>
          </tr>
          <tr>
            <td>Killer Instinct</td>
            <td>Halo</td>
            <td></td>
          </tr>
          <tr>
            <td>DBZ Kakarot</td>
            <td>Call of Duty</td>
            <td></td>
          </tr>
        </table>
      </div>
    );
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
