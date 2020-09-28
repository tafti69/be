import React from "react";
import mobile from "../images/mobile.png";

const Midamo = () => {
  return (
    <div className="work-midamo">
      <div className="some-words">
        <p>Midamo is a food delivery app</p>
      </div>
      <div className="process">
        <h2>We did everything, from scratch.</h2>
      </div>
      <div className="mockup">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
};

export default Midamo;
