import React from "react";
import {NavLink} from "react-router-dom";
import styles from "components/Home/Hero/Hero.module.css";

export default () => (
  <section className={styles.hero}>
    <h2>Dedicated to the Craft of Building Websites</h2>

    <p>
      Every year the brightest web designers and front-end developers descend on
      Chicago to discuss the latest technologies. Join us this August!
    </p>

    <NavLink className={styles.btn} to="/register">
      Register Now
    </NavLink>
  </section>
);
