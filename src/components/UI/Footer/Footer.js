import React from "react";
import Nav from "components/UI/Nav/Nav";
import styles from "components/UI/Footer/Footer.module.css";

export default () => (
  <footer className={styles.footer}>
    <small>&copy; Styles Conference</small>
    <Nav />
  </footer>
);
