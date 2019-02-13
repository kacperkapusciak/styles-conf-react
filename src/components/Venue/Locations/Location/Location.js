import React from "react";
import PropTypes from "prop-types";
import styles from "components/Venue/Locations/Location/Location.module.css";

const uri = "https://www.google.com/maps/embed?pb=";

const Location = ({ name, street, city, website, tel, coordinates }) => (
  <section className={styles.location}>
    <div>
      <h2>{name}</h2>
      <p> {street} <br /> {city} </p>
      <p> 
        <a href={`https://www.${website}`} target="_blank" rel="noopener noreferrer"> 
          {website} 
        </a> 
        <br />
        {tel}
      </p>
    </div>
    <iframe className={styles.map} src={uri + coordinates} title={name}/>
  </section>
);

Location.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  website: PropTypes.string,
  tel: PropTypes.string,
  coordinates: PropTypes.string.isRequired
}

export default Location;
