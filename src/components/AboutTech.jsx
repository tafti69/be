import React, { useState, useRef } from "react";

const AboutTech = ({ obj }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("plus");
  const content = useRef(null);

  function toggleAccordian() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(active === "active" ? "plus" : "x");
  }

  return (
    <>
      <div className="about-tech">
        <div onClick={toggleAccordian} className="tech-item">
          <div className="number">{obj.num}</div>
          <div className="line">
            <p>{obj.name}</p>
          </div>
          <div className={`${rotate}`}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          className="content"
          ref={content}
          style={{ maxHeight: `${height}` }}
        >
          <div className="content-wrapper">
            <p>{obj.results}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTech;
