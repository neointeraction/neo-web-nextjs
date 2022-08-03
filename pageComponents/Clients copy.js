import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Noise } from "noisejs";

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -5 },
};

const subTitleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 5 },
};

const Clients = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //   Bubbles

  const CANVAS_WIDTH = 3000;
  // The amplitude. The amount the noise affects the movement.
  const NOISE_AMOUNT = 5;
  // The frequency. Smaller for flat slopes, higher for jagged spikes.
  const NOISE_SPEED = 0.004;
  // Pixels to move per frame. At 60fps, this would be 18px a sec.
  const SCROLL_SPEED = 0.3;

  const bubbles = [
    {
      s: 0.6,
      x: 1134,
      y: 45,
    },
    {
      s: 0.6,
      x: 1620,
      y: 271,
    },
    {
      s: 0.6,
      x: 1761,
      y: 372,
    },
    {
      s: 0.6,
      x: 2499,
      y: 79,
    },
    {
      s: 0.8,
      x: 2704,
      y: 334,
    },
    {
      s: 0.6,
      x: 2271,
      y: 356,
    },
    {
      s: 0.6,
      x: 795,
      y: 226,
    },
    {
      s: 0.6,
      x: 276,
      y: 256,
    },
    {
      s: 0.6,
      x: 1210,
      y: 365,
    },
    {
      s: 0.6,
      x: 444,
      y: 193,
    },
    {
      s: 0.6,
      x: 2545,
      y: 387,
    },
    {
      s: 0.8,
      x: 1303,
      y: 193,
    },
    {
      s: 0.8,
      x: 907,
      y: 88,
    },
    {
      s: 0.8,
      x: 633,
      y: 320,
    },
    {
      s: 0.8,
      x: 323,
      y: 60,
    },
    {
      s: 0.8,
      x: 129,
      y: 357,
    },
    {
      s: 0.8,
      x: 1440,
      y: 342,
    },
    {
      s: 0.8,
      x: 1929,
      y: 293,
    },
    {
      s: 0.8,
      x: 2135,
      y: 198,
    },
    {
      s: 0.8,
      x: 2276,
      y: 82,
    },
    {
      s: 0.8,
      x: 2654,
      y: 182,
    },
    {
      s: 0.8,
      x: 2783,
      y: 60,
    },
    {
      s: 1.0,
      x: 1519,
      y: 118,
    },
    {
      s: 1.0,
      x: 1071,
      y: 233,
    },
    {
      s: 1.0,
      x: 1773,
      y: 148,
    },
    {
      s: 1.0,
      x: 2098,
      y: 385,
    },
    {
      s: 1.0,
      x: 2423,
      y: 244,
    },
    {
      s: 1.0,
      x: 901,
      y: 385,
    },
    {
      s: 1.0,
      x: 624,
      y: 111,
    },
    {
      s: 1.0,
      x: 75,
      y: 103,
    },
    {
      s: 1.0,
      x: 413,
      y: 367,
    },
    {
      s: 1.0,
      x: 2895,
      y: 271,
    },
    {
      s: 1.0,
      x: 1990,
      y: 75,
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
    bubbles.map((bubble) => ({
      ...bubble,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: bubble.x,
      yWithNoise: bubble.y,
    }))
  );

  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 200);

    animationRef.current = requestAnimationFrame(animateLogo);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  function animateLogo() {
    bubblesRef.current = bubblesRef.current.map((bubble, index) => {
      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

      const randomX = noise.simplex2(newNoiseSeedX, 0);
      const randomY = noise.simplex2(newNoiseSeedY, 0);

      const newX = bubble.x - SCROLL_SPEED;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

      const element = document.getElementById(`bubble-${index}`);

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
      }

      return {
        ...bubble,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -200 ? CANVAS_WIDTH : newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      };
    });

    animationRef.current = requestAnimationFrame(animateLogo);
  }

  // end ====> bubles

  return (
    <div className="client-container">
      <div className="client-title">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariant}
          className="n-banner-title"
        >
          Our Satisfied
          <span className="highlight"> Customers </span>
        </motion.h1>
        <motion.h4
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={subTitleVariant}
          className="n-banner-subtext"
        >
          We have worked with some cool people to make their tech user friendly
        </motion.h4>
      </div>
      <div className="client-content">
        <div className="bubbles-wrapper">
          <div className="bubbles">
            {bubbles.map((bubble, index) => (
              <div
                className="bubble"
                id={`bubble-${index}`}
                key={`${bubble.x} ${bubble.y}`}
                style={{
                  backgroundPosition: backgroundPositions[index],
                  opacity: isReady ? 1 : 0,
                  transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
