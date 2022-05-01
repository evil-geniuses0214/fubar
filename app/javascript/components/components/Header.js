import React, { Component } from "react";
import homeIcon from "../assets/home-icon.jpg";
import "../assets/target.png";
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
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

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
          <Navbar expand="md" full className="header-main">
            <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
            <NavbarToggler className="toggle" onClick={this.toggleNavbar} />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar className="nav-holder">
                <NavItem>
                  <NavLink to="/" className="nav-link header-nav">
                    <img src={homeIcon} className="home-icon" />
                  </NavLink>
                </NavItem>
                <span className="navbar-options">
              <NavLink to="/" className="nav-link header-nav">
                Home
              </NavLink>
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
                        <NavLink to="/marketplace" className="nav-link">
                          Marketplace
                        </NavLink>
                      </NavItem>
                  )}
                  {logged_in && (
                      <NavItem>
                        <a href={sign_out_route} className="nav-link header-nav" >
                          Logout
                        </a>
                      </NavItem>
                  )}
                  {!logged_in && (
                      <NavItem>
                        <a href={sign_in_route} className="nav-link header-nav">
                          Login
                        </a>
                      </NavItem>
                  )}
                  {!logged_in && (
                      <NavItem>
                        <a href={new_user_route} className="nav-link header-nav">
                          Sign Up!
                        </a>
                      </NavItem>
                  )}
                  <NavLink to="/" className="nav-link header-nav">
                <i className="fa fa-user account" aria-hidden="true"></i>
              </NavLink>
              </span>
              </Nav>
            </Collapse>
          </Navbar>
        </>
    );
  }
}
