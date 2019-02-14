import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Header from "components/UI/Header/Header";
import Logo from "components/UI/Logo/Logo";
import Nav from "components/UI/Nav/Nav";

describe("<Header/>", () => {
  it("displays Logo, tagline and the Nav", () => {
    const component = shallow(<Header />);
    expect(component.find(Logo).length).toEqual(1);
    expect(component.find("h3").length).toEqual(1);
    expect(component.find(Nav).length).toEqual(1);
  });
});
