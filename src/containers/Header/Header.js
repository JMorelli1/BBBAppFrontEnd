import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import AddDropDown from "./AddDropDown.js";
import communityPic from "../../assets/communityPic.jpg";
import "./Header.css";

const Header = () => {
  const userLinks = [
    { linkPath: "/users", linkTag: "View Users" },
    { linkPath: "/createuser", linkTag: "Create User" },
    { linkPath: "/assignuser", linkTag: "Assign User" },
  ];

  const jobLinks = [
    { linkPath: "/jobs", linkTag: "View Jobs" },
    { linkPath: "/createjob", linkTag: "Create Job" },
  ];

  return (
    <>
      <img src={communityPic} className="BannerImage" alt="" />
      <Navbar color="dark" sticky="top">
        <Nav>
          <NavbarBrand href="/">BBB Home</NavbarBrand>
          <AddDropDown dropDownTitle={"Users"} links={userLinks} />
          <AddDropDown dropDownTitle={"Jobs"} links={jobLinks} />
        </Nav>
      </Navbar>
    </>
  );
};
export default Header;
