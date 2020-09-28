import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import { NavLink, withRouter } from "react-router-dom";
import gsap from "gsap/gsap-core";
import Navigation from "./Navigation";

let tl = gsap.timeline();

const Header = ({ history }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
  }, [history]);

  useEffect(() => {
    if (menuState.menuOpened === true) {
      gsap.to(".nav", 0, { css: { display: "block" } });
      tl.from(".nav", 1.2, {
        height: 0,
        skewY: 11,
        ease: "power2.out",
      })
        .from(".navbar li a", 1.2, {
          y: 200,
          ease: "power2.out",
          stagger: 0.2,
          delay: -0.8,
        })
        .from(".navbar .line-item", 1.2, {
          y: 100,
          ease: "power2.out",
          stagger: 0.2,
          delay: -0.8,
        });
    } else {
      gsap.to(".nav", 0, { css: { display: "none" } });
    }
  }, [menuState.menuOpened]);

  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/" exact>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="pages">
          <div className="page-line">
            <NavLink exact to="/services">
              About
            </NavLink>
          </div>
          <div className="page-line">
            <NavLink exact to="/work">
              Projects
            </NavLink>
          </div>
          <div className="page-line">
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
        <div
          className="nav-button"
          onClick={() => setMenuState({ menuOpened: true })}
        >
          <button>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <Navigation setMenuState={setMenuState} />
    </>
  );
};

export default withRouter(Header);
