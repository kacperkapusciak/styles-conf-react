import React from "react";
import Row from "components/UI/Row/Row";
import Container from "components/UI/Container/Container";
import Grid from "components/UI/Grid/Grid";

const Speaker = props => (
  <Row>
    <Container>
      <Grid columns="2fr 1fr">
        <div>Reason to attend</div>
        <div>Form</div>
      </Grid>
    </Container>
  </Row>
);

export default Speaker;
