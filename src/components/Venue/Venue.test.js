import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Venue from "components/Venue/Venue";
import Header from "components/UI/Header/Header";
import Lead from "components/UI/Lead/Lead";
import Locations from "components/Venue/Locations/Locations";
import Footer from "components/UI/Footer/Footer";

describe("<Venue />", () => {
  it("displays <Header>, <Lead>, <Locations>, <Footer> components", () => {
    const component = shallow(<Venue />);
    expect(component.find(Header).length).toEqual(1);
    expect(component.find(Lead).length).toEqual(1);
    expect(component.find(Locations).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });
});
