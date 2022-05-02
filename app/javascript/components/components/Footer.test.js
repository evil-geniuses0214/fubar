import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("../assets/githubLogo.png");

describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Footer />);
  });
  it("display a page", () => {
    const renderedText = render.find("footer").length;
    expect(renderedText).toEqual(1);
  });
});
