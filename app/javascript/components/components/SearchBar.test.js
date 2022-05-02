import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "./SearchBar";
Enzyme.configure({ adapter: new Adapter() });

const mockProps = [];

describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<SearchBar weapons={mockProps} prices={mockProps} />);
  });
  it("display a Navbar", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(6);
  });
  it("displays a picture", () => {
    const renderedText = render.find("[htmlFor='name']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a picture", () => {
    const renderedText = render.find("[htmlFor='description']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a picture", () => {
    const renderedText = render.find("[htmlFor='weapon']");
    expect(renderedText.length).toEqual(1);
  });
});
