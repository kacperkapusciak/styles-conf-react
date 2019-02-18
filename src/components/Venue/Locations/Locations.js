import React from "react";
import Location from "components/Venue/Locations/Location/Location";
import locations from "components/Venue/Locations/locations.json";
import Container from "components/UI/Container/Container";
import Row from "components/UI/Row/Row";

export default () => (
  <Row>
    <Container>
      {locations.map((location, i) => (
        <Location key={`location-${i}`} {...location} />
      ))}
    </Container>
  </Row>
);
