import React from "react";
import Logo from "components/UI/Logo/Logo";
import Nav from "components/UI/Nav/Nav";
import styles from "components/UI/Header/Header.module.css";

export default () => (
  <header className={styles.header}>
    <Logo />
    <h3 className={styles.tagline}>August 24&ndash;26th &mdash; Chicago, IL</h3>
    <Nav primary/>
  </header>
);
