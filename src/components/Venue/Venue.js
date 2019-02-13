import React from "react";
import Container from "components/UI/Container/Container";
import Header from "components/UI/Header/Header";
import Footer from "components/UI/Footer/Footer";
import Lead from "components/UI/Lead/Lead";

const Venue = props => (
  <>
    <Container>
      <Header />
    </Container>

    <Lead
      title="Venue"
      text="The conference is held at The Chicago Theatre, a beautiful historical landmark. The conference hotel, Hotel Chicago, is a short walk away down State Street."
    />

    <Container>
      <Footer />
    </Container>
  </>
);

export default Venue;
