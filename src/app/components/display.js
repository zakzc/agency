import React from "react";
// assets
import Zelda from "../assets/img/zelda_banner.jpg";
import Sekiro from "../assets/img/sekiro_banner.jpg";

const Display = () => {
  const DisplayText = ({ text }) => {
    return <span className="display-text">{text}</span>;
  };
  return (
    <div className="display" style={{ marginTop: "-50px" }}>
      <div className="flex-container">
        <div className="image-container">
          <div className="flex-item-left">
            <img src={Zelda} alt="Zelda game" className="image-style" />
            <DisplayText text={"The Legend of Zelda - Breath of the wild"} />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item-right">
            <img src={Sekiro} alt="Sekiro game" className="image-style" />
            <DisplayText text={"SEKIRO - Shadows die twice"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Display;
