import React from "react";
import ggweb from "../images/ggweb.png";
import ggmobile from "../images/ggmobile.png";
import Footer from "../components/Footer";

const Gundelik = () => {
  return (
    <>
      <div className="work-gg">
        <div className="some-words">
          <p>Gundelik Gürcüstan is a news website about Georgia.</p>
        </div>
        <div className="mockup">
          <div className="web">
            <img src={ggweb} alt="" />
          </div>
          <div className="mobile">
            <img src={ggmobile} alt="" />
          </div>
        </div>
        <div className="process">
          <h2>What we did:</h2>
          <ul>
            <li>QA</li>
            <li>UI design</li>
            <li>UX research</li>
            <li>Front-end development</li>
            <li>CMS with Wordpress</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gundelik;
