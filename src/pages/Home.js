import React, { useRef, useEffect } from "react";
import House from "../assets/house1.png";
import Skyscraper from "../assets/skyscraper.png";
import { gsap, ScrollTrigger } from "gsap/all";

// Components
import { Navbar } from "../components/Navbar";

export const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headingRef = useRef(null);
  const houseRef = useRef(null);
  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      duration: 1,
      y: "10%",
      delay: 0.7,
    });
    gsap.from(houseRef.current, {
      opacity: 0,
      duration: 1,
    });
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "bottom 90%",
        scrub: 1,
      },
    });
    tls.to(headingRef.current, {
      color: "#f1f1f1",
      duration: 2,
    });
    tls.to(
      houseRef.current,
      {
        scale: 1.05,
        duration: 2,
      },
      "-=2",
    );
  }, []);
  return (
    <>
      <Navbar />
      <section className="section-one">
        <div className="intro-text">
          <h1 ref={headingRef}>welcome to your dream home</h1>
          {/* <p>
            At SecondSunshine we make finding your next private chalet as easy
            as possible
          </p> */}
        </div>
        <img ref={houseRef} src={House} alt="house" className="house" />
      </section>
      <section className="section-two">
        <h5 className="test">about us</h5>
        <div className="section-two-grid">
          <h2>someshit to say</h2>
          <img src={Skyscraper} alt="skyscraper" className="skyscraper" />
        </div>
      </section>
      <section className="section-three"></section>
    </>
  );
};
