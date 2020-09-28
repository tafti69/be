import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import Footer from "../components/Footer";
import ScrollTrigger from "gsap/ScrollTrigger";
import gg from "../images/ggpng.png";
import mi from "../images/mi.png";
import lingua from "../images/lingua.png";

const Work = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from(".line-item", 1.8, {
      y: 300,
      ease: "power2.out",
      skewY: 6,
    });
    gsap.from(".project-item", 1.8, {
      scrollTrigger: ".project-item",
      opacity: 0,
      y: 50,
      ease: "power2.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <>
      <div className="work">
        <div className="line">
          <div className="line-item based">
            Butterfly Effect has a knack for entrepreneurial
          </div>
        </div>
        <div className="line">
          <div className="line-item based">
            pursuits and works not only for clients, but also
          </div>
        </div>
        <div className="line">
          <div className="line-item based">
            builds and maintains very own digital products and
          </div>
        </div>
        <div className="line">
          <div className="line-item based">
            always open for a partnership and collaboration.
          </div>
        </div>

        <div className="line">
          <div className="line-item make">
            We make sure to create scalable solutions that are fast and
            maintainable in the future.
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="project-item">
          <NavLink to="/midamo" exact>
            <h3>Our own project</h3>
            <div className="frame orange">
              <img src={mi} alt="" />
            </div>
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink to="/gundelik" exact>
            <h3>Partner's project</h3>
            <div className="frame blue">
              <img src={gg} alt="" />
            </div>
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink to="/" exact>
            <h3>Client's project</h3>
            <div className="frame">
              <img src={lingua} alt="" />
            </div>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
