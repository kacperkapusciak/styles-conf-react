import React from "react";
import PropTypes from "prop-types"
import styles from "components/UI/Lead/Lead.module.css";

const Lead = ({ title, text }) => (
  <section className={styles.lead_bg}>
    <div className={styles.lead}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </section>
);

Lead.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Lead;
