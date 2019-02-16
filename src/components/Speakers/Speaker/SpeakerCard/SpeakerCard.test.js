import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import SpeakerCard from "components/Speakers/Speaker/SpeakerCard/SpeakerCard";

describe("<SpeakerCard />", () => {
  let props = {
    name: "Name",
    surname: "Surname",
    image: ""
  };

  let emptyWebsites = {
    websites: []
  };

  let twitterWebsites = {
    twitter: "twitter",
    websites: ["www1", "www2"]
  };

  let propsWebsites = { ...props, ...emptyWebsites };
  let propsTwitterWebsites = { ...props, ...twitterWebsites };

  it("displays only <img> tag if twitter and websites are not provided", () => {
    const component = shallow(<SpeakerCard {...props} />);
    expect(component.find("img").length).toEqual(1);
    expect(component.find("li").length).toEqual(0);
    expect(component.find("a").length).toEqual(0);
  });

  it("doesn't display any <li> element when websites array is empty", () => {
    const component = shallow(<SpeakerCard {...propsWebsites} />);
    expect(component.find("li").length).toEqual(0);
    expect(component.find("a").length).toEqual(0);
  });

  it("displays three <li> tags when twitter and two websites are provided", () => {
    const component = shallow(<SpeakerCard {...propsTwitterWebsites} />);
    expect(component.find("li").length).toEqual(3);
    expect(component.find("a").length).toEqual(3);
  });
});
