import React from 'react';
import {
    Card, CardText, CardBody,CardTitle
  } from 'reactstrap';

const UserCard = (props) =>{

    const user = props;
    return(
      <>
      <Card style={{background: 'silver'}}>
        <CardBody>
          <CardTitle>User</CardTitle>
          <CardText>{user.firstName} {user.lastName}</CardText>
          <CardText>Email: {user.email}</CardText>
          <CardText>Phone Number: {user.phoneNumber}</CardText>
        </CardBody>
      </Card>
      </>
    );
  }

export default UserCard;