import React from "react";
import Header from "components/UI/Header/Header";
import Lead from "components/UI/Lead/Lead";
import Footer from "components/UI/Footer/Footer";
import ConferencePass from "components/Register/ConferencePass/ConferencePass";

const Register = props => (
  <>
    <Header />
    <Lead
      title="Register"
      text="Every year we aim to have an unbelievable time, and this year we&#8217;d love it for you to join us. Conference passes only cost $99, one of the best values you&#8217;ll find."
    />
    <ConferencePass />
    <Footer />
  </>
);

export default Register;
