import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ setMenuState }) => {
  return (
    <>
      <div className="nav">
        <div
          className="nav-button"
          onClick={() => setMenuState({ menuOpened: false })}
        >
          <button>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="navbar">
          <div className="menu-line">
            <p>Menu</p>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/services">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/work">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="social">
            <div className="line">
              <a href="www.facebook.com" className="line-item media">
                Twitter
              </a>
              <a href="www.facebook.com" className="line-item media">
                Facebook
              </a>
              <a href="www.facebook.com" className="line-item media">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
