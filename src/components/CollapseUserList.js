import React from "react";
import { Collapse, Col } from "reactstrap";
import UserCard from "../components/UserCard.js";

const CollapseUserList = (props) => {
  return [
    props.userList.map((user) => {
      return (
        <Col>
          <Collapse
            isOpen={props.users.includes(props.index)}
            style={{ marginBottom: 20 }}
          >
            <UserCard key={user.userId} {...user} showUserImg={false} />
          </Collapse>
        </Col>
      );
    }),
  ];
};
export default CollapseUserList;
