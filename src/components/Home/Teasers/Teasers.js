import React from "react";
import styles from "components/Home/Teasers/Teasers.module.css";
import Teaser from "components/Home/Teasers/Teaser/Teaser";
import teasers from "components/Home/Teasers/teasers.json";

export default () => (
  <section className={styles.teasers}>
    <div className={styles.grid}>
      {teasers.map((teaser, i) => (
        <Teaser key={`teaser-${i}`} {...teaser} />
      ))}
    </div>
  </section>
);
