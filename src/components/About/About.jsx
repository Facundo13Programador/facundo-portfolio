import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImageFacu.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I build responsive and user-friendly interfaces using React, JavaScript,
                HTML, and CSS.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience working with Node.js and building REST APIs, focusing on
                clean and maintainable code.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Learning icon" />
            <div className={styles.aboutItemText}>
              <h3>Continuous Learning</h3>
              <p>
                I'm constantly learning new technologies and improving my skills to grow
                as a developer and stay up to date with the industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
