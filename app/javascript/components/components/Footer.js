import React, { Component } from "react";
import githubLogo from "../assets/githubLogo.png";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-style">
          <Nav>
            <NavItem>
              <NavLink href="" target="_blank">
                Terms
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://github.com/evil-geniuses0214/fubar"
                target="_blank"
              >
                Docs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" target="_blank">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
          </Nav>
          <Nav className="copyright">
            <img src={githubLogo} className="footer-logo" /> &copy; 2022 Fubar
          </Nav>
        </div>
      </footer>
    );
  }
}
