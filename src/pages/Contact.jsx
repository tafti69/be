import React, { useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.from(".line-item", 1.8, {
      y: 200,
      ease: "power2.out",
    });
    gsap.from(".marquee", 1.8, {
      opacity: 0,
      ease: "power2.out",
      delay: 0.8,
    });
  }, []);

  return (
    <div className="contact">
      <div className="collab">
        <div className="line">
          <div className="line-item hey">Hey! Tell us about</div>
        </div>
        <div className="line">
          <div className="line-item hey">your idea.</div>
        </div>
      </div>
      <div className="collab">
        <div className="line">
          <div className="line-item idea">
            We’re always interested in new opportunities and collaborations.
          </div>
        </div>
        <div className="line">
          <div className="line-item idea">Contact us about your project.</div>
        </div>
      </div>
      <div className="marquee">
        <div className="line">
          <a href="/" className="line-item">
            butterflyeffect@gmail.com
          </a>
        </div>
      </div>
      <div className="also-contact">
        <div className="career">
          <div className="line">
            <div className="line-item job">Want to join butterfly effect? </div>
            <div className="line-item job">Happy to hear more about you at</div>
            <a href="/" className="line-item job underline">
              jobsbutterflyeffect@gmail.com
            </a>
          </div>
        </div>
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
  );
};

export default Contact;
