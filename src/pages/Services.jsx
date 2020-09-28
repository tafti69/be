import React, { useEffect } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";
import AboutTech from "../components/AboutTech";
import ScrollTrigger from "gsap/ScrollTrigger";

const content = [
  {
    id: 0,
    type: "+",
    num: 1,
    name: "Product strategy",
    results:
      "We bring broad experience to your project, not only in UI design or technical implementation areas, but also in researching and forming your product’s value proposition.",
  },
  {
    id: 1,
    type: "+",
    num: 2,
    name: "UI and UX design",
    results:
      "In today’s highly competitive landscape, a better user experience could be the defining point for your customers to stay with your offer and not look for alternatives. We are doing UX testing, visual concept design and also best UI design.",
  },
  {
    id: 2,
    type: "+",
    num: 3,
    name: "Front-end development",
    results:
      "We will help you implement a responsive, highly optimized, and fast front-end with advanced UI animations using HTML, CSS, JS, JQuery, React, Redux, GSAP. For mobile apps we're using powerful Xamarin in C#.",
  },
  {
    id: 3,
    type: "+",
    num: 4,
    name: "Back-end development",
    results:
      "We offer custom web and mobile application back-end development services for various profiles and industry focuses. C#, WEB API and .NET CORE in top of our list. Also we work with Wordpress.",
  },
  {
    id: 4,
    type: "+",
    num: 5,
    name: "Support",
    results:
      "We deploy all necessary management and development systems to automate and streamline support processes doing UX practice and bug fixing. First month support is free, then you can choose if our help is needed or not.",
  },
];

const Services = () => {
  // let ref = React.useRef(null);
  // let ref1 = React.useRef(null);
  // let ref2 = React.useRef(null);
  // let ref3 = React.useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".line-item", 1.8, {
      y: 300,
      ease: "power2.out",
      skewY: 6,
    });

    gsap.from(".tech-item p", 1.8, {
      scrollTrigger: ".tech-item p",
      y: 200,
      ease: "power2.out",
      stagger: 0.1,
    });
    gsap.from(".about-line h2", 1.8, {
      scrollTrigger: ".about-line h2",
      y: 200,
      ease: "power2.out",
    });

    // gsap.from(ref, 1.8, {
    //   scrollTrigger: ref,
    //   y: 300,
    //   ease: "power2.out",
    // });
    // gsap.from(ref1, 1.8, {
    //   scrollTrigger: ref1,
    //   y: 300,
    //   ease: "power2.out",
    // });
    // gsap.from(ref2, 1.8, {
    //   scrollTrigger: ref2,
    //   y: 300,
    //   ease: "power2.out",
    // });
    // gsap.from(ref3, 1.8, {
    //   scrollTrigger: ref3,
    //   y: 300,
    //   ease: "power2.out",
    // });
  }, []);

  return (
    <>
      <div className="about">
        <div className="line">
          <div className="line-item based">
            Butterfly Effect is a Marneuli-based creative
          </div>
        </div>
        <div className="line">
          <div className="line-item based">
            digital agency that focuses on the strategy,
          </div>
        </div>
        <div className="line">
          <div className="line-item based">
            design and development of digital products.
          </div>
        </div>

        <div className="line">
          <div className="line-item make">
            Websites, mobile apps, content - we build interfaces that are both
            functional and fun to use.
          </div>
        </div>
      </div>
      <div className="about-services">
        <div className="about-line">
          <h2>Services and technologies</h2>
        </div>
        <div className="tech">
          {content.map((obj, index) => (
            <AboutTech key={index} obj={obj} />
          ))}
        </div>
      </div>
      {/* <div className="collab-about">
        <div className="line">
          <div ref={(el) => (ref = el)} className="line-item hey">
            Hey! Tell us about
          </div>
        </div>
        <div className="line">
          <div ref={(el) => (ref1 = el)} className="line-item hey">
            your idea.
          </div>
        </div>
      </div>
      <div className="collab-about">
        <div className="line">
          <div ref={(el) => (ref2 = el)} className="line-item idea">
            We’re always interested in new opportunities and collaborations.
          </div>
        </div>
        <div className="line">
          <div ref={(el) => (ref3 = el)} className="line-item idea">
            Contact us about your project.
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Services;
