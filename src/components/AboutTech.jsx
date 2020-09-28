import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutTech = ({ obj }) => {
  const [expanded, setExpanded] = useState(false);
  const isOpen = obj.id === expanded;

  return (
    <>
      <div className="about-tech">
        <div
          onClick={() => {
            setExpanded(isOpen ? false : obj.id);
          }}
          className="tech-item"
        >
          <span>{obj.num}</span>
          <div className="line">
            <p>{obj.name}</p>
          </div>
          <span>{obj.type}</span>
        </div>
        <motion.div
          key="content"
          animate={{ height: isOpen ? "100%" : "0" }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="content"
        >
          <div className="content-wrapper">
            <p>{obj.results}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutTech;
