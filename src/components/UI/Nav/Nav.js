import React from "react";
import { NavLink } from "react-router-dom";
import styles from "components/UI/Nav/Nav.module.css";

const links = ["home", "speakers", "schedule", "venue", "register"];

export default () => (
  <nav className={styles.primaryNav}>
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <NavLink className={styles.a} to={`/${link}`}>
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
