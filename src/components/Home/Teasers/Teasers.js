import React from "react";
import Teaser from "components/Home/Teasers/Teaser/Teaser";
import teasers from "components/Home/Teasers/teasers.json";

import Row from "components/UI/Row/Row";
import Container from "components/UI/Container/Container";
import Grid from "components/UI/Grid/Grid";

export default () => (
  <Row>
    <Container>
      <Grid columns="1fr 1fr 1fr">
        {teasers.map((teaser, i) => (
          <Teaser key={`teaser-${i}`} {...teaser} />
        ))}
      </Grid>
    </Container>
  </Row>
);
