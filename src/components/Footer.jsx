import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Footer = () => {
  let refLine = useRef(null);
  let app = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);
  let line7 = useRef(null);
  let line = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from(refLine, 1.8, {
      scrollTrigger: refLine,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(app, 1.8, {
      scrollTrigger: app,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(line, 1.8, {
      scrollTrigger: line,
      y: 200,
      ease: "power2.out",
    });
    gsap.from(line1, 1.8, {
      scrollTrigger: line1,
      y: 200,
      ease: "power2.out",
    });
    gsap.from(line2, 1.8, {
      scrollTrigger: line2,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(line3, 1.8, {
      scrollTrigger: line3,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(line4, 1.8, {
      scrollTrigger: line4,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(line5, 1.8, {
      scrollTrigger: line5,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(line6, 1.8, {
      scrollTrigger: line6,
      y: 100,
      ease: "power2.out",
    });
    gsap.from(line7, 1.8, {
      scrollTrigger: line7,
      y: 100,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="footer">
      <div className="footer-line">
        <h2 ref={(el) => (line = el)}>Let's make something</h2>
      </div>
      <div className="footer-line">
        <h2 ref={(el) => (line1 = el)}>great together</h2>
      </div>
      <div className="footer-line-col">
        <p ref={(el) => (line2 = el)}>Have a project or want to collaborate?</p>
        <p ref={(el) => (line3 = el)}>
          <span className="say">Say</span>
          <a className="email" href="/">
            butterflyeffect@gmail.com
          </a>
        </p>
      </div>
      <div className="footer-contact">
        <div className="footer-career">
          <div className="footer-line">
            <div ref={(el) => (line4 = el)} className="footer-line-item job">
              Want to join butterfly effect?{" "}
            </div>
          </div>
          <div className="footer-line">
            <div ref={(el) => (line5 = el)} className="footer-line-item job">
              Happy to hear more about you at
            </div>
          </div>
          <div className="footer-line">
            <a
              ref={(el) => (line6 = el)}
              href="/"
              className="footer-line-item job underline"
            >
              jobsbutterflyeffect@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-line">
            <a
              ref={(el) => (line7 = el)}
              href="/"
              className="footer-line-item footer-media"
            >
              Twitter
            </a>
          </div>
          <div className="footer-line">
            <a
              ref={(el) => (refLine = el)}
              href="/"
              className="footer-line-item footer-media"
            >
              Facebook
            </a>
          </div>
          <div className="footer-line">
            <a
              ref={(el) => (app = el)}
              href="/"
              className="footer-line-item footer-media"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
