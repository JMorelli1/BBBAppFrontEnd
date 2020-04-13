import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card, CardText, CardBody,CardTitle, Button
  } from 'reactstrap';

const UserCard = (props) =>{
    const user = props;
    const buttonLink = `/useredit/${user.userId}`;
    return(
      <>
      <Card style={{background: 'silver'}}>
        <CardBody>
          <CardTitle>User</CardTitle>
          <CardText>{user.firstName} {user.lastName}</CardText>
          <CardText>Email: {user.email}</CardText>
          <CardText>Phone Number: {user.phoneNumber}</CardText>
          <Link to={buttonLink}>
            <Button color="primary">Edit</Button>
          </Link>
        </CardBody>
      </Card>
      </>
    );
  }

export default UserCard;