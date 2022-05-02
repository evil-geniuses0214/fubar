import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PostList from "./PostList";
Enzyme.configure({ adapter: new Adapter() });

const mockProps = null;

describe("When file renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<PostList posts={mockProps} />);
  });
  it("display a button", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(1);
  });
  it("display a button", () => {
    const renderedText = render.find("h1").text();
    expect(renderedText).toEqual("What are you up to?");
  });
});
