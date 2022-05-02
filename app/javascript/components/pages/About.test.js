import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "./About";
Enzyme.configure({ adapter: new Adapter() });

describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<About />);
  });
  it("display a page", () => {
    const renderedText = render.find("h1").text();
    expect(renderedText).toEqual("About Us");
  });
});
