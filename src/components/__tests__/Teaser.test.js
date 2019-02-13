import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Teaser from "components/Home/Teasers/Teaser/Teaser";
import { NavLink } from "react-router-dom";

describe("<Teaser />", () => {
  it("displays a h5, NavLink, img, h3, p elements", () => {
    const component = shallow(<Teaser />);
    expect(component.find("h5").length).toEqual(1);
    expect(component.find(NavLink).length).toEqual(1);
    expect(component.find("img").length).toEqual(1);
    expect(component.find("h3").length).toEqual(1);
    expect(component.find("p").length).toEqual(1);
  });
});
