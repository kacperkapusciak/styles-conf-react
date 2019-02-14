import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Speaker from "components/Speakers/Speaker/Speaker";
import SpeakerStory from "components/Speakers/Speaker/SpeakerStory/SpeakerStory";
import SpeakerCard from "components/Speakers/Speaker/SpeakerCard/SpeakerCard";

describe("<Speaker />", () => {
  const props = {
    name: "",
    surname: "",
    image: "",
    title: "",
    content: [],
    about: ""
  };
  it("displays <SpeakerStory> and <SpeakerCard> components", () => {
    const component = shallow(<Speaker {...props} />);
    expect(component.find(SpeakerStory).length).toEqual(1);
    expect(component.find(SpeakerCard).length).toEqual(1);
  });
});
