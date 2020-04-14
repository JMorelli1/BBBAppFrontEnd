import React from "react";
import communityPic from "../../assets/communityPic.jpg";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <img src={communityPic} className="BannerImage" alt="" />
      <Navbar color="dark" sticky="top">
        <Nav>
          <NavbarBrand href="/">BBB Home</NavbarBrand>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Users
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink href="/users">View All</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/createuser">Create User</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/jobs">Jobs</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};
export default Header;
