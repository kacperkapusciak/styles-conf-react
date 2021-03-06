import React from "react";
import SpeakerStory from "components/Speakers/Speaker/SpeakerStory/SpeakerStory";
import SpeakerCard from "components/Speakers/Speaker/SpeakerCard/SpeakerCard";

import Row from "components/UI/Row/Row";
import Grid from "components/UI/Grid/Grid";
import Container from "components/UI/Container/Container";

const Speaker = props => (
  <Row>
    <Container>
      <Grid columns="2fr 1fr">
        <SpeakerStory {...props} />
        <SpeakerCard {...props} />
      </Grid>
    </Container>
  </Row>
);

export default Speaker;
