import React from "react";
import { NavLink } from "react-router-dom";
import styles from "components/UI/Nav/Nav.module.css";

export default () => (
  <nav className={styles.primaryNav}>
    <ul>
      <li>
        <NavLink className={styles.a} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={styles.a} to="/speakers">Speakers</NavLink>
      </li>
      <li>
        <NavLink className={styles.a} to="/schedule">Schedule</NavLink>
      </li>
      <li>
        <NavLink className={styles.a} to="/venue">Venue</NavLink>
      </li>
      <li>
        <NavLink className={styles.a} to="/register">Register</NavLink>
      </li>
    </ul>
  </nav>
);
