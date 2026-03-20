import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Facundo</h1>
        <p className={styles.description}>
          I'm a Junior Software Developer recently graduated as a Programming Analyst.
          I'm passionate about building web applications and currently focused on
          improving my skills in React, JavaScript and backend development.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=facundo13.programador@gmail.com"
          target="_blank"
          rel="noopener noreferrer" className={styles.contactBtn}>
          Contact Me
        </a>




        <a
          href="/Cv.pdf"
          className={styles.Dcv}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroFacundo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
