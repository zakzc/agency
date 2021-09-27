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
        <div className="drop-menu table">
          <div className="table-container">
            <div id="table-item-1" className="table-area">
              <div>
                <h4 className="table-header">Luta</h4>
                <ul>
                  <li className="list-item">Mortal Kombat</li>
                  <li className="list-item">Smash Bros</li>
                  <li className="list-item">Killer Instinct</li>
                  <li className="list-item">DBZ Kakarot</li>
                </ul>
              </div>
            </div>
            <div id="table-item-2" className="table-area">
              <div>
                <h4 className="table-header">Ação/Aventura</h4>
                <ul>
                  <li className="list-item">GTA V</li>
                  <li className="list-item">Tomb Raider</li>
                  <li className="list-item">Halo</li>
                  <li className="list-item">Call of Duty</li>
                </ul>
              </div>
            </div>
            <div id="table-item-3 " className="table-area">
              <div>
                <h4 className="table-header">Corrida</h4>
                <ul>
                  <li className="list-item">Need for Speed</li>
                  <li className="list-item">Forza Horizon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
