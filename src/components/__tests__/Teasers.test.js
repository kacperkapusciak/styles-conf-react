import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Teasers from "components/Home/Teasers/Teasers";
import Teaser from "components/Home/Teasers/Teaser/Teaser";

describe("<Teasers />", () => {
  it("displays 3 <Teaser /> components", () => {
    const component = shallow(<Teasers />);
    expect(component.find(Teaser).length).toEqual(3);
  });
});
