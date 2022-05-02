import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Index from "./Index";
Enzyme.configure({ adapter: new Adapter() });

const mockProps = [];
describe("<Index >", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Index profiles={mockProps} />);
  });
  it("displays a Row", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(2);
  });
});
