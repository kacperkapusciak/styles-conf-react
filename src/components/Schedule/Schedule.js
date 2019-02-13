import React from "react";
import Container from "components/UI/Container/Container";
import Header from "components/UI/Header/Header";
import Footer from "components/UI/Footer/Footer";
import Lead from "components/UI/Lead/Lead";
import Timetable from "components/Schedule/Timetable/Timetable";

const Schedule = props => (
  <>
    <Container>
      <Header />
    </Container>

    <Lead
      title="Schedule"
      text="The conference opens with amazing workshops and continues with two days of incredible talks and keynotes, all of which are facilitated by industry-leading experts."
    />

    <Timetable />

    <Container>
      <Footer />
    </Container>
  </>
);

export default Schedule;
