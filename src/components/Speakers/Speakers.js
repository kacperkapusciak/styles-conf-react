import React from "react";
import Header from "components/UI/Header/Header";
import Lead from "components/UI/Lead/Lead";
import Speaker from "components/Speakers/Speaker/Speaker";
import Footer from "components/UI/Footer/Footer";

const Speakers = props => (
  <>
    <Header />
    <Lead
      title="Speakers"
      text="We&#8217;re happy to welcome over twenty speakers to present on the industry&#8217;s latest technologies. Prepare for an inspiration extravaganza."
    />
    <Speaker />
    <Footer />
  </>
);

export default Speakers;
