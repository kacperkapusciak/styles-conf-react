import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Nav from "components/UI/Nav/Nav";
import { NavLink } from "react-router-dom";

describe("<Nav />", () => {
  it("displays 5 links to different paths of the app", () => {
    const component = shallow(<Nav />);
    expect(component.find(NavLink).length).toEqual(5);
  });
});
