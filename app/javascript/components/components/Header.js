import React, { Component } from "react";
import homeIcon from "../assets/home-icon";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Navbar color="dark" dark expand="md" full>
          <Collapse navbar>
            <Nav>
              <NavItem>
                <NavLink to="/" className="nav-link">
                  <img src={homeIcon} className="home-icon" />
                </NavLink>
              </NavItem>
              {logged_in && (
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Profile
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      <NavItem>
                        <NavLink
                          to={`/profile/${current_user.id}`}
                          className="nav-link"
                        >
                          My Profile
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink
                          to={`/profileedit/${current_user.id}`}
                          className="nav-link"
                        >
                          Edit Profile
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavItem>
                        <NavLink to="/index" className="nav-link">
                          View All Profiles
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
              {logged_in && (
                <NavItem>
                  <a href={sign_out_route} className="nav-link">
                    Logout
                  </a>
                </NavItem>
              )}
              {!logged_in && (
                <NavItem>
                  <a href={sign_in_route} className="nav-link">
                    Login
                  </a>
                </NavItem>
              )}
              {!logged_in && (
                <NavItem>
                  <a href={new_user_route} className="nav-link">
                    Sign Up!
                  </a>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
