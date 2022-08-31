import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ClientBox = ({ logo }) => {
  const { ref, inView } = useInView({
    rootMargin: "-80px 0px -150px 0px",
  });

  return (
    <div className="n-client-box" ref={ref}>
      <div className="n-stripe-flex">
        <motion.div
          animate={{ y: inView ? [150, 0] : 150 }}
          initial="hidden"
          transition={{ delay: 0, duration: 0.5 }}
          className="n-stripe"
        ></motion.div>
        <motion.div
          animate={{ y: inView ? [150, 0] : 150 }}
          initial="hidden"
          transition={{ delay: 0.2, duration: 0.5 }}
          className="n-stripe"
        ></motion.div>
        <motion.div
          animate={{ y: inView ? [150, 0] : 150 }}
          initial="hidden"
          transition={{ delay: 0.3, duration: 0.5 }}
          className="n-stripe"
        ></motion.div>
      </div>

      <AnimatePresence>
        {inView && (
          <motion.img
            animate={{ opacity: [0, 1] }}
            initial="hidden"
            transition={{ delay: 0.5, duration: 0.3 }}
            src={logo}
            alt="Logo-img"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientBox;
