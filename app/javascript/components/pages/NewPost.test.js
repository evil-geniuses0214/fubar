import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewPost from "./NewPost";
Enzyme.configure({ adapter: new Adapter() });

describe("When file renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<NewPost />);
  });
  it("display a button", () => {
    const renderedText = render.find("Button").length;
    expect(renderedText).toEqual(3);
  });
  it("display a form", () => {
    const renderedText = render.find("form").length;
    expect(renderedText).toEqual(1);
  });
  it("display a form", () => {
    const renderedText = render.find("Modal").length;
    expect(renderedText).toEqual(1);
  });
  it("displays a name", () => {
    const renderedText = render.find("[name='title']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a type", () => {
    const renderedText = render.find("[type='submit']");
    expect(renderedText.length).toEqual(1);
  });
});
