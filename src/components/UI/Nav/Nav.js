import React from "react";
import { NavLink } from "react-router-dom";
import styles from "components/UI/Nav/Nav.module.css";

const links = ["home", "speakers", "schedule", "venue", "register"];

export default props => (
  <nav
    className={
      props.primary ? [styles.nav, styles.primaryNav].join(" ") : styles.nav
    }
  >
    <ul>
      {links.map((link, i) => (
        <li key={`${link}-nav`}>
          <NavLink className={styles.a} to={`/${link}`}>
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
