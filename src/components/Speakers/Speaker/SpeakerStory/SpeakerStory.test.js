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
    about: ""
  };
  let moreProps = {
    academicTitle: "Title",
    content: ["Paragraph1", "Paragraph2"]
  };
  let added = { ...props, ...moreProps };

  let component;
  beforeEach(() => {
    component = shallow(<SpeakerStory {...props} />);
  });

  it("displays <h2>, two <h5> and at least one <p>", () => {
    expect(component.find("h2").length).toEqual(1);
    expect(component.find("h5").length).toEqual(2);
    expect(component.find("p").length).toEqual(1);
  });

  it("displays only name and surname if academic title is not provided", () => {
    expect(component.find("h2").text()).toEqual("Name Surname");
  });

  it("displays only one paragraph (about) if content array is empty", () => {
    expect(component.find("p").length).toEqual(1);
  });

  describe("more props added", () => {
    beforeEach(() => {
      component = shallow(<SpeakerStory {...added} />);
    });

    it("displays academic title, name and surname if academic title is provided", () => {
      expect(component.find("h2").text()).toEqual("Title Name Surname");
    });

    it("displays content.length+1 paragraphs", () => {
      expect(component.find("p").length).toEqual(3);
    });
  });
});
