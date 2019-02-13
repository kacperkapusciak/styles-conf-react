import React from "react";
import styles from "components/UI/Lead/Lead.module.css";

export default ({ title, text }) => (
  <section className={styles.lead_bg}>
    <div className={styles.lead}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </section>
);
