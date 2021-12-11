import React, { useState, useEffect } from "react";
import { useTrail, a } from "react-spring";
import Link from "next/link";

import ArrowRightIntro from "../images/arrowRightIntro.svg";

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 74 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

function TrailDot({ openDot, children, ...props }) {
  const itemsDot = React.Children.toArray(children);
  const trailDot = useTrail(itemsDot.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: openDot ? 1 : 0,
    x: openDot ? 0 : 20,
    height: openDot ? 74 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main-dot" {...props}>
      <div>
        {trailDot.map(({ x, height, ...rest }, index) => (
          <a.div
            key={itemsDot[index]}
            className="trails-text-dot"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{itemsDot[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

function IntroPage(props) {
  const { para1, para2, para3, para4, id } = props;
  const [open, set] = useState(false);
  const [openDot, setDot] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      set(true);
      setDot(true);
    }, 1000);
  }, []);
  return (
    <div>
      <Link href="/Home" className="skip-intro">
        {/* Skip <img src={SkipArr} alt="skip" /> */}
        <img src={ArrowRightIntro} alt="ArrowRight" />
      </Link>
      <Trail
        open={open}
        onClick={() => {
          set((state) => !state);
          setDot((state) => !state);
        }}
      >
        <span>{para1} </span>
        <span>{para2}</span>
        <span>{para3}</span>
        <span>{para4}</span>
      </Trail>

      {id === "intro1" && (
        <TrailDot openDot={openDot}>
          <span class="pulse pulse1"></span>
          <span class="pulse pulse2"></span>
          <span class="pulse pulse3"></span>
        </TrailDot>
      )}

      {id === "intro2" && (
        <TrailDot openDot={openDot}>
          <span class="pulse pulse4"></span>
          <span class="pulse pulse5"></span>
        </TrailDot>
      )}
      {id === "intro3" && (
        <TrailDot openDot={openDot}>
          <span class="pulse pulse6"></span>
        </TrailDot>
      )}
      {id === "intro4" && (
        <TrailDot openDot={openDot}>
          <span class="pulse pulse7"></span>
          <span class="pulse pulse8"></span>
        </TrailDot>
      )}
    </div>
  );
}

export default IntroPage;
