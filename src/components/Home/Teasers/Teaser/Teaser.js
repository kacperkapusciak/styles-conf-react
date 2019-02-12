import React from "react";
import { NavLink } from "react-router-dom";
import styles from "components/Home/Teasers/Teaser/Teaser.module.css";

const uri = "https://firebasestorage.googleapis.com/v0/b/styles-conf-react.appspot.com/o/";

export default ({ title, image, subtitle, text }) => (
  <section className={styles.teaser}>
    <h5>{title}</h5>
    <NavLink to={`/${title}`}>
      <img src={uri + image} alt="" />
      <h3>{subtitle}</h3>
    </NavLink>
    <p>{text}</p>
  </section>
);
