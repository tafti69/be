import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found-page">
        <div className="not-found">
          <div className="track">
            <div>
              This page doesn't exist This page doesn't exist This page doesn't
              exist This page doesn't exist
            </div>
          </div>
        </div>
        <NavLink to="/" exact>
          <div className="more-btn btn-circle ">
            <p>Go to Homepage</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
