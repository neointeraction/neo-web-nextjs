import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Noise } from "noisejs";

import Shameer from "assets/images/n-images/team/shameer.jpg";
import Team1 from "assets/images/n-images/team/team1.jpg";
import Sam from "assets/images/n-images/team/sam.jpg";
import Midhun from "assets/images/n-images/team/midhun.jpg";
import Team2 from "assets/images/n-images/team/team2.jpg";
import Vignesh from "assets/images/n-images/team/vignesh.jpg";
import Team3 from "assets/images/n-images/team/team3.jpg";
import Team4 from "assets/images/n-images/team/team4.jpg";
import Team5 from "assets/images/n-images/team/team5.jpg";
import Allen from "assets/images/n-images/team/allen.jpg";
import Eldhos from "assets/images/n-images/team/Eldhos.jpg";
import Clifford from "assets/images/n-images/team/clifford.jpg";
import Team6 from "assets/images/n-images/team/team6.jpg";
import Rakshanda from "assets/images/n-images/team/rakshanda.jpg";
import Sebin from "assets/images/n-images/team/sebin.jpg";
import Ashutosh from "assets/images/n-images/team/Ash.jpg";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -5 },
};

const HomeTeam = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //   box

  const CANVAS_WIDTH = 1420;
  // The amplitude. The amount the noise affects the movement.
  const NOISE_AMOUNT = 5;
  // The frequency. Smaller for flat slopes, higher for jagged spikes.
  const NOISE_SPEED = 0.004;
  // Pixels to move per frame. At 60fps, this would be 18px a sec.
  const SCROLL_SPEED = 0.3;

  const boxes = [
    // Top
    {
      s: 1,
      x: 1534,
      y: 45,
      bg: Sebin,
      width: 110,
      height: 110,
    },
    {
      s: 1,
      x: 1384,
      y: 45,
      bg: Team4,
      width: 110,
      height: 150,
    },
    {
      s: 1,
      x: 1254,
      y: 45,
      bg: Midhun,
      width: 80,
      height: 80,
    },
    {
      s: 1,
      x: 1094,
      y: 65,
      bg: Shameer,
      width: 120,
      height: 120,
    },
    {
      s: 1,
      x: 934,
      y: 25,
      bg: Team1,
      width: 130,
      height: 130,
    },
    {
      s: 1,
      x: 734,
      y: 25,
      bg: Sam,
      width: 150,
      height: 150,
    },
    {
      s: 0.8,
      x: 464,
      y: 60,
      bg: Team2,
      width: 250,
      height: 150,
    },
    {
      s: 0.8,
      x: 334,
      y: 25,
      bg: Vignesh,
      width: 140,
      height: 140,
    },
    {
      s: 0.8,
      x: 44,
      y: 5,
      bg: Team3,
      width: 300,
      height: 180,
    },
    // Bottom
    {
      s: 1,
      x: 1424,
      y: 385,
      bg: Team5,
      width: 230,
      height: 150,
    },
    {
      s: 1,
      x: 1254,
      y: 445,
      bg: Allen,
      width: 90,
      height: 90,
    },
    {
      s: 1,
      x: 1094,
      y: 465,
      bg: Eldhos,
      width: 110,
      height: 110,
    },
    {
      s: 1,
      x: 954,
      y: 405,
      bg: Clifford,
      width: 90,
      height: 140,
    },
    {
      s: 1,
      x: 654,
      y: 425,
      bg: Team6,
      width: 250,
      height: 150,
    },
    {
      s: 0.8,
      x: 494,
      y: 395,
      bg: Rakshanda,
      width: 130,
      height: 190,
    },
    {
      s: 0.8,
      x: 334,
      y: 425,
      bg: Sebin,
      width: 130,
      height: 190,
    },
    {
      s: 0.8,
      x: 54,
      y: 405,
      bg: Ashutosh,
      width: 280,
      height: 180,
    },
  ];

  const backgroundPositions = [];

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
    }
  }

  const noise = new Noise();
  const animationRef = React.useRef();
  const bubblesRef = React.useRef(
    boxes.map((box) => ({
      ...box,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: box.x,
      yWithNoise: box.y,
    }))
  );

  React.useEffect(() => {
    animationRef.current = requestAnimationFrame(animateLogo);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  function animateLogo() {
    bubblesRef.current = bubblesRef.current.map((box, index) => {
      const newNoiseSeedX = box.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = box.noiseSeedY + NOISE_SPEED;

      const randomX = noise.simplex2(newNoiseSeedX, 0);
      const randomY = noise.simplex2(newNoiseSeedY, 0);

      const newX = box.x - SCROLL_SPEED;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = box.y + randomY * NOISE_AMOUNT;

      const element = document.getElementById(`box-${index}`);

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${box.s})`;
      }

      return {
        ...box,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -200 ? CANVAS_WIDTH : newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      };
    });

    animationRef.current = requestAnimationFrame(animateLogo);
  }

  // end ====> box

  return (
    <div className="home-team-container" ref={ref}>
      <div className="client-content">
        <div className="boxes-wrapper">
          <motion.h3
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={titleVariant}
            className="n-banner-title"
          >
            <span className="highlight"> Designs </span> that touches people's
            lives, enables business success
          </motion.h3>
          <div className="boxes">
            {boxes.map((box, index) => (
              <div
                className="box"
                id={`box-${index}`}
                key={`${box.x} ${box.y}`}
                style={{
                  backgroundImage: `url(${box.bg})`,
                  opacity: inView ? 1 : 0,
                  transform: `translate(${box.x}px, ${box.y}px) scale(${box.s})`,
                  height: box.height,
                  width: box.width,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
