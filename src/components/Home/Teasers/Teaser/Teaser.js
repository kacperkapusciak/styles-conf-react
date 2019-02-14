import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "components/Home/Teasers/Teaser/Teaser.module.css";

const uri =
  "https://firebasestorage.googleapis.com/v0/b/styles-conf-react.appspot.com/o/";

const Teaser = ({ title, image, subtitle, text }) => (
  <section className={styles.teaser}>
    <h5>{title}</h5>
    <NavLink to={`/${title}`}>
      <div className={styles.img_container}>
        <img src={uri + image} alt="" />
      </div>
      <h3>{subtitle}</h3>
    </NavLink>
    <p>{text}</p>
  </section>
);

Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Teaser;
