import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const UserListGroup = (props) => {
  const toggle = (buttonIndex) => {
    props.setIsSelected(buttonIndex);
  };

  return (
    <ListGroup style={{ marginBottom: 20 }}>
      {props.users.map((user) => (
        <ListGroupItem
          tag="button"
          key={user.userId}
          action
          onClick={() => toggle(user.userId)}
          active={props.isSelected === user.userId ? true : false}
        >
          {user.firstName} {user.lastName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default UserListGroup;
