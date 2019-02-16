import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import SpeakerStory from "components/Speakers/Speaker/SpeakerStory/SpeakerStory";

describe("<SpeakerStory/>", () => {
  let props = {
    name: "Name",
    surname: "Surname",
    title: "",
    content: [],
    about: []
  };
  let moreProps = {
    academicTitle: "Title",
    content: ["Paragraph1", "Paragraph2"],
    about: ["Paragraph1"]
  };
  let added = { ...props, ...moreProps };

  let component;
  beforeEach(() => {
    component = shallow(<SpeakerStory {...props} />);
  });

  it("displays <h2>, two <h5> and zero <p>", () => {
    expect(component.find("h2").length).toEqual(1);
    expect(component.find("h5").length).toEqual(2);
    expect(component.find("p").length).toEqual(0);
  });

  it("displays only name and surname if academic title is not provided", () => {
    expect(component.find("h2").text()).toEqual("Name Surname");
  });

  it("doesn't displays any paragraphs if content and about array is empty", () => {
    expect(component.find("p").length).toEqual(0);
  });

  describe("more props added", () => {
    beforeEach(() => {
      component = shallow(<SpeakerStory {...added} />);
    });

    it("displays academic title, name and surname if academic title is provided", () => {
      expect(component.find("h2").text()).toEqual("Title Name Surname");
    });

    it("displays content.length + about.length paragraphs", () => {
      expect(component.find("p").length).toEqual(3);
    });
  });
});
