import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyProfile from "./MyProfile";
Enzyme.configure({ adapter: new Adapter() });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

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

describe("When file renders", () => {
  let render;
  beforeEach(() => {
    render = shallow(<MyProfile profile={mockProps} />);
  });
  it("display a page", () => {
    const renderedText = render.find("div").length;
    expect(renderedText).toEqual(4);
  });
});
