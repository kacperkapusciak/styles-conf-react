import React from "react";
import Header from "components/UI/Header/Header";
import Lead from "components/UI/Lead/Lead";
import Speaker from "components/Speakers/Speaker/Speaker";
import Footer from "components/UI/Footer/Footer";
import speakers from "components/Speakers/speakers.json";

const Speakers = props => (
  <>
    <Header />
    <Lead
      title="Speakers"
      text="We&#8217;re happy to welcome over twenty speakers to present on the industry&#8217;s latest technologies. Prepare for an inspiration extravaganza."
    />

    {speakers.map((speaker, i) => (
      <Speaker key={`speaker-${i}`} {...speaker} />
    ))}

    <Footer />
  </>
);

export default Speakers;
