import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MarketPlace from "./MarketPlace";
Enzyme.configure({ adapter: new Adapter() });

describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<MarketPlace />);
  });
  it("display a page", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(5);
  });
  it("display a page", () => {
    const renderedText = render.find("SearchBar").length;
    expect(renderedText).toEqual(1);
  });
  it("display a page", () => {
    const renderedText = render.find("h1").text();
    expect(renderedText).toEqual("*** WELCOME TO OUR MARKETPLACE ***");
  });
});
