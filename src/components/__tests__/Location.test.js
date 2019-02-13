import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Location from "components/Venue/Locations/Location/Location";

describe("<Location />", () => {
  const props = {
    name: "",
    street: "",
    city: "",
    website: "",
    tel: "",
    coordinates: ""
  };
  
  it("displays <h2>, two <p> elements, <a> tag and and <iframe>", () => {
    const component = shallow(<Location {...props} />);
    expect(component.find("h2").length).toEqual(1);
    expect(component.find("p").length).toEqual(2);
    expect(component.find("a").length).toEqual(1);
    expect(component.find("iframe").length).toEqual(1);
  });
});
