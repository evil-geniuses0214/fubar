import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";
Enzyme.configure({ adapter: new Adapter() });

describe("When file renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<NotFound />);
  });
  it("display a page", () => {
    const renderedText = render.find("h1").text();
    expect(renderedText).toEqual("NotFound");
  });
});
