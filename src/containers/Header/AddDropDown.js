import React from "react";
import {
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

const AddDropDown = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {props.dropDownTitle}
      </DropdownToggle>
      <DropdownMenu>
        {props.links.map((link) => {
          return (
            <DropdownItem>
              <NavLink href={link.linkPath}>{link.linkTag}</NavLink>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default AddDropDown;
