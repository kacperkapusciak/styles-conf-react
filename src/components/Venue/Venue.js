import React from "react";
import Header from "components/UI/Header/Header";
import Footer from "components/UI/Footer/Footer";
import Lead from "components/UI/Lead/Lead";
import Locations from "components/Venue/Locations/Locations";

const Venue = props => (
  <>
    <Header />
    <Lead
      title="Venue"
      text="The conference is held at The Chicago Theatre, a beautiful historical landmark. The conference hotel, Hotel Chicago, is a short walk away down State Street."
    />
    <Locations />
    <Footer />
  </>
);

export default Venue;
