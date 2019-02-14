import React from "react";
import Header from "components/UI/Header/Header";
import Footer from "components/UI/Footer/Footer";
import Lead from "components/UI/Lead/Lead";

const Speakers = props => (
  <>
    <Header />
    <Lead
      title="Speakers"
      text="We&#8217;re happy to welcome over twenty speakers to present on the industry&#8217;s latest technologies. Prepare for an inspiration extravaganza."
    />
    <Footer />
  </>
);

export default Speakers;
