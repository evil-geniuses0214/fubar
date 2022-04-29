import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("../assets/target.png");

describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Header />);
  });
  it("display a Navbar", () => {
    const renderedText = render.find("Navbar").length;
    expect(renderedText).toEqual(1);
  });
  it("display a page", () => {
    const renderedText = render.find("NavLink").length;
    expect(renderedText).toEqual(3);
  });
  it("display a page", () => {
    const renderedText = render.find("NavItem").length;
    expect(renderedText).toEqual(3);
  });
});
