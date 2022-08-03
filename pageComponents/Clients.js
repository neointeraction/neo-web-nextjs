import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ClientBox from "../components/ClientBox";

import ITG from "../images/n-images/clients/itg.svg";
import INT from "../images/n-images/clients/int.svg";
import Traveloka from "../images/n-images/clients/traveloka.svg";
import BNP from "../images/n-images/clients/bnp.svg";
import Qudos from "../images/n-images/clients/qudos.svg";
import CBD from "../images/n-images/clients/cbd.svg";
import Yoko from "../images/n-images/clients/yoko.svg";
import FS from "../images/n-images/clients/fs.svg";
import Inatech from "../images/n-images/clients/inatech.svg";
import CS from "../images/n-images/clients/cs.svg";
import Clayfin from "../images/n-images/clients/clayfin.svg";
import Brac from "../images/n-images/clients/brac.svg";
import Wipro from "../images/n-images/clients/wipro.svg";
import LS from "../images/n-images/clients/LS.svg";
import ICICI from "../images/n-images/clients/ICICI.svg";

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
        <div className="client-flex">
          <div className="client-item">
            <ClientBox logo={ITG} />
            <ClientBox logo={INT} />
            <ClientBox logo={Traveloka} />
          </div>
          <div className="client-item mt-10">
            <ClientBox logo={BNP} />
            <ClientBox logo={Qudos} />
            <ClientBox logo={CBD} />
          </div>
          <div className="client-item">
            <ClientBox logo={Yoko} />
            <ClientBox logo={FS} />
            <ClientBox logo={Inatech} />
          </div>
          <div className="client-item mt-10">
            <ClientBox logo={CS} />
            <ClientBox logo={Clayfin} />
            <ClientBox logo={Brac} />
          </div>
          <div className="client-item ">
            <ClientBox logo={Wipro} />
            <ClientBox logo={LS} />
            <ClientBox logo={ICICI} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
