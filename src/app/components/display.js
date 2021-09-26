import React from "react";
// assets
import Zelda from "../assets/img/zelda_banner.jpg";
import Sekiro from "../assets/img/sekiro_banner.jpg";

const Display = () => {
  const DisplayText = () => {
    return <span className="display-text">Some text goes here</span>;
  };
  return (
    <div className="display" style={{ marginTop: "-50px" }}>
      <div className="flex-container">
        <div className="flex-item-left">
          <img
            src={Zelda}
            alt="Zelda game"
            style={{ width: "350px", marginRight: "10px" }}
          />
          {/* <DisplayText /> */}
        </div>

        <div className="flex-item-right">
          <img
            src={Sekiro}
            alt="Sekiro game"
            style={{ width: "350px", marginLeft: "10px" }}
          />
          {/* <DisplayText /> */}
        </div>
      </div>
    </div>
  );
};
export default Display;
