import React from "react";
// assets
import hamburger from "../assets/svgs/icon_hamburguer.svg";

export default function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <img
            style={{
              width: "15px",
            }}
            src={hamburger}
            alt="hamburger menu"
          />
        </li>
        <li>
          <span>Logo</span>
        </li>
        <li>
          <span>Contato Busca</span>
        </li>
        <li>
          <span className="shopping-bag">Sacola</span>
        </li>
      </ul>
    </div>
  );
}
