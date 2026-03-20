import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
        Feel free to contact me!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=facundo13.programador@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            facundo13.programador@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/facundo-casa%C3%B1as-875871219/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/facundo-casañas-875871219
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/Facundo13Programador"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Facundo13Programador
          </a>
        </li>
      </ul>
    </footer>
  );
};