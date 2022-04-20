import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
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
    UncontrolledDropdown
} from 'reactstrap'


export default class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        console.log("logged_in:", logged_in)
        console.log("current_user:", current_user)
        return (
            <>
                <Navbar color="dark" dark expand="md" full>
                    <NavbarBrand href="/">
                        Nav
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() {
                    }}/>
                    <Collapse navbar>
                        <Nav>
                            <NavItem>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/aboutus" className="nav-link">About us</NavLink>
                            </NavItem>
                            {logged_in &&
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav>Profile
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            <NavItem>
                                                <NavLink to="/profile" className="nav-link">My Profile</NavLink>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem>
                                                <NavLink to="/profile/edit" className="nav-link">Edit Profile</NavLink>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem divider/>
                                        <DropdownItem>
                                            <NavItem>
                                                <NavLink to="/view/all" className="nav-link">View All
                                                    Profiles</NavLink>
                                            </NavItem>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            }
                            {logged_in &&
                                <NavItem>
                                    <a href={sign_out_route} className="nav-link">Logout</a>
                                </NavItem>
                            }
                            {!logged_in &&
                                <NavItem>
                                    <a href={sign_in_route} className="nav-link">Login</a>
                                </NavItem>
                            }
                            {!logged_in &&
                                <NavItem>
                                    <a href={new_user_route} className="nav-link">Sign Up!</a>
                                </NavItem>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}