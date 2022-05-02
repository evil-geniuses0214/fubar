import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Register from "./Register";
Enzyme.configure({ adapter: new Adapter() });

const mockProps = {
  name: "Marc",
  picture:
    "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-04/220421-johnny-depp-jm-1347-4dd153.jpg",
  branch_of_service: "Navy",
  military_status: "Active",
  city: "San Diego",
  state: "California",
  favorite_beer: "Modelo",
  duty_station: "San Diego Naval Base",
  about_me: "I am a badass.",
};
describe("When File renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Register />);
  });
  it("displays a form", () => {
    const renderedText = render.find("Form");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a name", () => {
    const renderedText = render.find("[name='name']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a picture", () => {
    const renderedText = render.find("[name='picture']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays service branch", () => {
    const renderedText = render.find("[name='branch_of_service']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays military sevice", () => {
    const renderedText = render.find("[name='military_status']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a city", () => {
    const renderedText = render.find("[name='city']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays a state", () => {
    const renderedText = render.find("[name='state']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays favorite beer", () => {
    const renderedText = render.find("[name='favorite_beer']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays duty station", () => {
    const renderedText = render.find("[name='duty_station']");
    expect(renderedText.length).toEqual(1);
  });
  it("displays about me", () => {
    const renderedText = render.find("[name='about_me']");
    expect(renderedText.length).toEqual(1);
  });
});
