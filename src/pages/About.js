import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Skyscraper from "../assets/skyscraper.png";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const topRef = useRef(null);
  const aboutTextRef = useRef(null);
  useEffect(() => {
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: topRef.current,
        start: "top top",
        scrub: 1,
      },
    });
    tls.to(".skyscraper", {
      height: "110%",
      duration: 1,
    });
    tls.from(
      aboutTextRef.current,
      {
        opacity: 0,
        y: "10%",
        duration: 2,
      },
      "-=1",
    );
  }, []);
  return (
    <section className="section-two p-t-2">
      <div ref={topRef} className="arrow-container">
        <div className="arrow"></div>
        <i class="fas fa-sun arrow-sun"></i>
      </div>
      <h5 className="m-t-1">about us</h5>
      <div className="about">
        <h4 ref={aboutTextRef} className="m-t-1">
          at secondSunshine we make it easy to find your dream home
        </h4>
      </div>
      <div className="section-two-grid m-t-9">
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim
          omnis necessitatibus? Id necessitatibus dolorum debitis dolorem
          exercitationem provident corporis temporibus, incidunt animi.
          Necessitatibus tenetur labore illum voluptate sit doloribus. Repellat
          quibusdam voluptatem itaque! Eaque, eos in error distinctio,
          voluptatibus earum voluptate ullam vero quia deleniti odit, deserunt
          nostrum nam nesciunt? Neque cum expedita deleniti doloribus possimus
          ex eum saepe?.
        </p>
        <img src={Skyscraper} alt="skyscraper" className="skyscraper" />
      </div>
    </section>
  );
};
