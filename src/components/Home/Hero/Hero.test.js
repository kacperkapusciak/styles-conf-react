import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Hero from "components/Home/Hero/Hero";
import { NavLink } from "react-router-dom";

describe("<Hero />", () => {
  it("displays h2, paragraph and a NavLink 'button'", () => {
    const component = shallow(<Hero />);
    expect(component.find("h2").length).toEqual(1);
    expect(component.find("p").length).toEqual(1);
    expect(component.find(NavLink).length).toEqual(1);
  });
});
