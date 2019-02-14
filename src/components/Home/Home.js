import React from "react";
import Container from "components/UI/Container/Container";
import Header from "components/UI/Header/Header";
import Hero from "components/Home/Hero/Hero";
import Teasers from "components/Home/Teasers/Teasers";
import Footer from "components/UI/Footer/Footer";

const Home = props => (
  <>
    <Header />
    <Hero />
    <Teasers />
    <Footer />
  </>
);

export default Home;
