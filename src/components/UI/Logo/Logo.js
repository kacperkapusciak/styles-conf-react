import React from "react";
import { NavLink } from "react-router-dom";
import styles from "components/UI/Logo/Logo.module.css";

export default () => (
  <h1 className={styles.logo}>
    <NavLink to="/" className={styles.a}>
      Styles <br /> Conference
    </NavLink>
  </h1>
);
