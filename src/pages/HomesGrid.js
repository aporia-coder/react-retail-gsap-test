import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

export const HomesGrid = () => {
  gsap.registerPlugin(ScrollTrigger);
  const topRef = useRef(null);
  useEffect(() => {
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: topRef.current,
        start: "top top",
      },
    });
    tls.to(".section-three", {
      backgroundColor: "#d9ccbb",
      duration: 1,
    });
  }, []);
  return (
    <section ref={topRef} className="section-three">
      <div></div>
    </section>
  );
};
