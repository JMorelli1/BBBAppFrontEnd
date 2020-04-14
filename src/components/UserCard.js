import React from "react";
import { Card, CardText, CardBody, CardImg } from "reactstrap";
import profile from "../assets/profile.jpg";

const UserCard = (props) => {
  const user = props;

  return (
    <Card style={{ background: "silver" }}>
      <CardBody>
        <CardImg top width="100%" src={profile} alt="Card profile temp" />
        <hr />
        <CardText>
          {user.firstName} {user.lastName}
        </CardText>
        <CardText>Email: {user.email}</CardText>
        <CardText>Phone Number: {user.phoneNumber}</CardText>
      </CardBody>
    </Card>
  );
};

export default UserCard;
