import React from "react";
import styles from "./LinkCard.module.css"

const LinkCardFC = () => {
  return (
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <a className={styles.icon} href="#">
            <img src="/facebook-icon.svg" alt="Facebook" />
          </a>
          <a className={styles.icon} href="#">
            <img src="/twitter-icon.svg" alt="Twitter" />
          </a>
          <a className={styles.icon} href="#">
            <img src="/youtube-icon.svg" alt="YouTube" />
          </a>
      </div>
    </div>
  );
};

export default LinkCardFC
