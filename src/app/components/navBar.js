import React, { useState } from "react";
// assets
import hamburger from "../assets/svgs/icon_hamburguer.svg";

export default function NavBar() {
  const [popUp, setPopUp] = useState(false);
  console.log("pop", popUp);

  const PopUpButton = () => {
    return (
      <li>
        <button className="nav-button" onClick={() => setPopUp(!popUp)}>
          <img
            style={{
              width: "15px",
            }}
            src={hamburger}
            alt="hamburger menu"
          />
          <span
            style={popUp ? { visibility: "show" } : { visibility: "hidden" }}
          >
            This is the popup text...
          </span>
        </button>
      </li>
    );
  };

  const MiniNav = () => {
    return (
      <>
        <li>
          <span>Logo space</span>
        </li>
        <li>
          <span>Contato Busca</span>
        </li>
        <li>
          <span className="shopping-bag">Sacola</span>
        </li>
      </>
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
