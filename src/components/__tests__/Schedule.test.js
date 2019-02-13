import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Schedule from "components/Schedule/Schedule";
import Header from "components/UI/Header/Header";
import Lead from "components/UI/Lead/Lead";
import Timetable from "components/Schedule/Timetable/Timetable";
import Footer from "components/UI/Footer/Footer";

describe("<Schedule />", () => {
  it("displays a <Header>, <Lead>, <Timetable> and <Footer>", () => {
    const component = shallow(<Schedule />);
    expect(component.find(Header).length).toEqual(1);
    expect(component.find(Lead).length).toEqual(1);
    expect(component.find(Timetable).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });
});
