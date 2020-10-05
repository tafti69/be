import gsap from "gsap";
import React from "react";
import mobile from "../images/mobile.png";
import midmob from "../images/midmob.png";
import midmob2 from "../images/midmob2.png";
import Footer from "../components/Footer";

const Midamo = () => {
  React.useEffect(() => {
    gsap.from(".some-words p", 1.6, {
      y: 100,
      ease: "power2.out",
    });
    gsap.from(".process h2", 1.6, {
      y: 150,
      ease: "power2.out",
    });
    gsap.from(".mockup", 1.6, {
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div className="work-midamo">
        <div className="some-words">
          <p>Midamo is a food delivery app</p>
        </div>
        <div className="process">
          <h2>We did everything, from scratch.</h2>
        </div>
        <div className="mockup">
          <img src={midmob2} alt="" />

          <img src={mobile} alt="" />
          <img src={midmob} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Midamo;
