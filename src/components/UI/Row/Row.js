import React from "react";
import styles from "components/UI/Row/Row.module.css";

const Row = ({ children }) => <section className={styles.row}>{children}</section>;

export default Row;
