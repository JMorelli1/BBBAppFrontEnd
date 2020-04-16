import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropDownUsers = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Select User");

  const handleClick = (firstName, lastName, userId) => {
    setSelectedUser(firstName + " " + lastName);
    props.setSelectedUserId(userId);
  };

  const toggle = () => {
    setDropDown(!dropDown);
  };

  return (
    <Dropdown isOpen={dropDown} onClick={toggle}>
      <DropdownToggle caret>{selectedUser}</DropdownToggle>
      <DropdownMenu>
        {props.users.map((user) => [
          <DropdownItem
            onClick={() => {
              handleClick(user.firstName, user.lastName, user.userId);
            }}
            active={props.selctedUserId === user.userId ? true : false}
          >
            {user.firstName} {user.lastName}
          </DropdownItem>,
        ])}
      </DropdownMenu>
    </Dropdown>
  );
};
export default DropDownUsers;
