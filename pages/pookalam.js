import React from "react";
import styled from "styled-components";
import styles from "../assets/css/pookalam.module.css";

const pookalam = () => {
  return (
    <div className={styles.pookalam}>
      <div className={styles.pookalam__content}>
        <h1 className={styles.pookalam__contentheading}>
          Pookalam Design & Coding Challenge
        </h1>
        <p className={styles.description}>
          Calling up on all developers and designers to celebrate this Oname by
          crafting a digital Pookalam with us and win exciting prizes!
        </p>

        <p className={styles.lastdate}>
          Last date of submission 30th August 6:00 PM
        </p>

        <h5 className={styles.submitcaption}>To submit your designs</h5>

        <div className={styles.buttonsContainer}>
          <a href="https://forms.gle/Zj8LpW8mR3j8vCFx9">
            <button>Submit your design</button>
          </a>
          <a href="/career">
            <button>Get hired</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default pookalam;
