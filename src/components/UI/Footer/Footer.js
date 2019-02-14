import React from "react";
import Nav from "components/UI/Nav/Nav";
import styles from "components/UI/Footer/Footer.module.css";
import Container from "components/UI/Container/Container";
export default () => (
  <Container>
    <footer className={styles.footer}>
      <small>&copy; Styles Conference</small>
      <Nav />
    </footer>
  </Container>
);
