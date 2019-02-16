import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import WhyAttend from "components/Register/ConferencePass/WhyAttend/WhyAttend";

describe("<WhyAttend />", () => {
  it("displays <h2>, <h4>, <h5>, <p>, <ul> and 4 <li>s", () => {
    const component = shallow(<WhyAttend />);
    expect(component.find("h2").length).toEqual(1);
    expect(component.find("h4").length).toEqual(1);
    expect(component.find("h5").length).toEqual(1);
    expect(component.find("p").length).toEqual(1);
    expect(component.find("ul").length).toEqual(1);
    expect(component.find("li").length).toEqual(4);
  });
});
