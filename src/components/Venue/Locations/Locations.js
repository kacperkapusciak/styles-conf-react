import React from "react";
import Location from "components/Venue/Locations/Location/Location";
import locations from "components/Venue/Locations/locations.json";
import Container from "components/UI/Container/Container";
import styles from "components/Venue/Locations/Locations.module.css";

export default () => (
  <div className={styles.locations}>
    <Container>
      {locations.map((location, i) => (
        <Location key={`location-${i}`} {...location} />
      ))}
    </Container>
  </div>
);
