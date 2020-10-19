import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const Navbar = () => {
  const navRef = useRef(null);
  useEffect(() => {
    gsap.from("#nav-link", {
      opacity: 0,
      y: "-100%",
      duration: 1,
      stagger: 0.4,
    });
  }, []);

  return (
    <nav>
      <ul>
        <li id="nav-link">home</li>
        <li id="nav-link">about</li>
        <li id="nav-link">contact</li>
      </ul>
    </nav>
  );
};
