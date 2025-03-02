import React, { useEffect } from "react";
import "particles.js/particles";

const Particle: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        line_linked: {
          enable: false,
          opacity: 0.03,
        },
        move: {
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            particles_nb: 1,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />
  );
};

export default Particle;
