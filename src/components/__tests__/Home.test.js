import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Home from "components/Home/Home";
import Header from "components/UI/Header/Header";
import Hero from "components/Home/Hero/Hero";
import Teasers from "components/Home/Teasers/Teasers";
import Footer from "components/UI/Footer/Footer";

describe("<Home />", () => {
  it("displays <Header>, <Hero>, <Teasers> and <Footer> components", () => {
    const component = shallow(<Home />);
    expect(component.find(Header).length).toEqual(1);
    expect(component.find(Hero).length).toEqual(1);
    expect(component.find(Teasers).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });
});
