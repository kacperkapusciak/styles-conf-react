import React from "react";
import Container from "components/UI/Container/Container";
import Header from "components/UI/Header/Header";
import Hero from "components/Home/Hero/Hero";
import Teasers from "components/Home/Teasers/Teasers";

const Home = props => (
  <>
    <Container>
      <Header />
      <Hero />
    </Container>
    <Teasers />
  </>
);

export default Home;
