import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Landing from "./Landing";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("../assets/landing-bg.jpg");

describe("When file renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Landing />);
  });
  it("display a page", () => {
    const renderedText = render.find("a").text();
    expect(renderedText).toEqual("SIGN-IN/SIGN-UP");
  });
});
