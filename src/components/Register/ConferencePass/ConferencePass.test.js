import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import ConferencePass from "components/Register/ConferencePass/ConferencePass";
import WhyAttend from "components/Register/ConferencePass/WhyAttend/WhyAttend";
import RegisterForm from "components/Register/ConferencePass/RegisterForm/RegisterForm";

describe("<ConferencePass />", () => {
  it("displays <WhyAttend> and <RegisterForm> components", () => {
    const component = shallow(<ConferencePass />);
    expect(component.find(WhyAttend).length).toEqual(1);
    expect(component.find(RegisterForm).length).toEqual(1);
  });
});
