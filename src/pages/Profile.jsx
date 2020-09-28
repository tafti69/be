import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useSpring, animated } from "react-spring";
import ScrollTrigger from "gsap/ScrollTrigger";
import midamo from "../images/Midamo.svg";
import Footer from "../components/Footer";
import logo from "../images/logo.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 5}px,${y / 10}px,0)`;

const tl = gsap.timeline();

const animation = () => {
  tl.to(".intro img", 1.2, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.6,
  })
    .to(".intro", 1.2, {
      height: 0,
      ease: "power2.out",
      delay: -0.6,
    })
    .from(".line-item", 1.8, {
      y: 250,
      ease: "power2.out",
    })
    .from(".page-line a", 1.2, {
      y: 50,
      ease: "power2.out",
      skewY: 5,
      stagger: 0.1,
      delay: -1,
    })
    .from(".logo", 1.2, {
      y: 50,
      ease: "power2.out",
      opacity: 0,
    });
};

const Profile = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    animation();

    gsap.from(".li li", 1, {
      scrollTrigger: ".li li",
      y: 200,
      ease: "power2.out",
      stagger: 0.1,
      skewY: 8,
    });
    gsap.from(".line h2", 1, {
      scrollTrigger: ".line h2",
      y: 200,
      ease: "power2.out",
      skewY: 8,
    });
    gsap.from(".more-btn", 1, {
      scrollTrigger: {
        trigger: ".more-btn",
      },
      opacity: 0,
      delay: 0.6,
      ease: "power2.out",
    });
    gsap.from(".background", 1, {
      scrollTrigger: {
        trigger: ".background",
      },
      opacity: 0,
      ease: "linear",
    });
    gsap.from(".about-midamo p", 1, {
      scrollTrigger: {
        trigger: ".about-midamo p",
      },
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <Intro />
      <div className="profile">
        <div className="line">
          <div className="line-item hello">Hello</div>
        </div>
        <div className="line">
          <div className="line-item">Butterfly Effect here</div>
        </div>
        <div className="line">
          <div className="line-item craft">
            We craft remarkable digital products
          </div>
        </div>
      </div>
      <div className="services">
        <div className="services-item">
          <div className="line">
            <h2>It's just what we do</h2>
          </div>
          <ul>
            <div className="li">
              <li>UI/UX</li>
            </div>
            <div className="li">
              <li>Branding</li>
            </div>

            <div className="li">
              <li>Web design</li>
            </div>
            <div className="li">
              <li>Graphic design</li>
            </div>
            <div className="li">
              <li>Web development</li>
            </div>
            <div className="li">
              <li>Server side engineering</li>
            </div>
            <div className="li">
              <li>Native iOS / Android applications</li>
            </div>
          </ul>
          <NavLink to="/services" exact>
            <div className="more-btn btn-circle ">
              <p>More</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="midamo">
        <div className="background">
          <NavLink to="/midamo" exact>
            <animated.div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
              className="frame"
            >
              <animated.img
                style={{ transform: props.xy.interpolate(trans1) }}
                src={midamo}
                alt=""
              />
            </animated.div>
          </NavLink>
        </div>
        <div className="about-midamo">
          <p>Midamo, mobile app</p>
          <p>Our own project</p>
        </div>
        <NavLink className="under" to="/work" exact>
          See other work
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

const Intro = () => {
  return (
    <div className="intro">
      <img src={logo} alt="" />
    </div>
  );
};

export default Profile;
