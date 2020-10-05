import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useSpring, animated } from "react-spring";
import ScrollTrigger from "gsap/ScrollTrigger";
import midamogif from "../images/midamogif.gif";
import Footer from "../components/Footer";
import logo from "../images/logo.svg";
import useMousePosition from "../components/useMousePosition";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "react-three-fiber";

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
    })
    .from(".nav-button button span", 1.2, {
      width: 0,
      ease: "power2.out",
      stagger: 0.2,
    });
  gsap.from(".hello-line-item", 1.2, {
    y: 100,
    ease: "power2.out",
    delay: 1.6,
  });
};

const Profile = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  let list = useRef();

  const { x, y } = useMousePosition();
  const [hoverState, sethoverState] = useState(false);

  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setListPosition({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    });
  }, [hoverState]);

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
    gsap.from(".under ", 1, {
      scrollTrigger: {
        trigger: ".under",
      },
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  }, []);

  const Box = ({ position }) => {
    const mesh = React.useRef(null);
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
    return (
      <mesh position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="#171717" />
      </mesh>
    );
  };

  return (
    <>
      <Intro />
      <div className="profile">
        <div ref={list} className="hello-gif">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left,
              y: y - listPosition.top,
            }}
            className="floating"
          >
            <iframe
              src="https://giphy.com/embed/Cmr1OMJ2FN0B2"
              width="280"
              height="180"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </motion.div>
          <div className="hello-line">
            <motion.div
              onHoverStart={() => sethoverState(true)}
              onHoverEnd={() => sethoverState(false)}
              className="hello-line-item"
            >
              Hello
            </motion.div>
          </div>
        </div>
        <div className="line">
          <div className="line-item">Butterfly Effect here</div>
        </div>
        <div className="line-cart">
          <div className="carft">We craft remarkable digital products</div>
        </div>
      </div>
      <div className="three">
        <Canvas colorManagement camera={{ fov: 30 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[-10, 0, -20]} intensity={0.6} />
          <pointLight position={[0, -10, 0]} intensity={1.6} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={2.5}
            shadow-mapSize-widht={512}
            shadow-mapSize-height={512}
            shadow-camera-far={40}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <ambientLightProbe intensity={2.5} />
          <Box />
        </Canvas>
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
                src={midamogif}
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
