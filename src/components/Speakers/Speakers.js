import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "components/UI/Header/Header";
import Lead from "components/UI/Lead/Lead";
import Speaker from "components/Speakers/Speaker/Speaker";
import Footer from "components/UI/Footer/Footer";

class Speakers extends Component {

  renderSpeakers() {
    return this.props.speakers.map((speaker, i) => (
      <Speaker key={`speaker-${i}`} {...speaker} />
    ));
  }

  render() {
    return (
      <>
        <Header />
        <Lead
          title="Speakers"
          text="We&#8217;re happy to welcome over twenty speakers to present on the industry&#8217;s latest technologies. Prepare for an inspiration extravaganza."
        />

        {this.renderSpeakers()}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    speakers: state.speakers
  };
};

export default connect(mapStateToProps)(Speakers);
