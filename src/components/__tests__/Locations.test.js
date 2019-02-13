import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Location from "components/Venue/Locations/Location/Location";
import Locations from "components/Venue/Locations/Locations";

describe("<Locations />", () => {
  it("displays two <Location> components", () => {
    const component = shallow(<Locations />);
    expect(component.find(Location).length).toEqual(2);
  });
});
