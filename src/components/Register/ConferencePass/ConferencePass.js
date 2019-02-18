import React from "react";
import Row from "components/UI/Row/Row";
import Container from "components/UI/Container/Container";
import Grid from "components/UI/Grid/Grid";
import WhyAttend from "components/Register/ConferencePass/WhyAttend/WhyAttend";
import RegisterForm from "components/Register/ConferencePass/RegisterForm/RegisterForm";

const Speaker = props => (
  <Row>
    <Container>
      <Grid columns="2fr 1fr">
        <WhyAttend />
        <RegisterForm />
      </Grid>
    </Container>
  </Row>
);

export default Speaker;
