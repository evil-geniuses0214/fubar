import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DisplayInventory from "./DisplayInventory";
Enzyme.configure({ adapter: new Adapter() });

describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<DisplayInventory />);
  });
  it("display a page", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(3);
  });
});
