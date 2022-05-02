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
    render = shallow(<Register profile={mockProps} />);
  });
  it("displays a card", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(2);
  });
});
