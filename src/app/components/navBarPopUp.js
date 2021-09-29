import React from "react";

const NavbarPopup = () => {
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
export default NavbarPopup;
