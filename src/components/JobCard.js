import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const JobCard = (props) => {
  return (
    <Card style={{ background: "silver" }}>
      <CardBody>
        <CardTitle>Job Title: {props.jobTitle}</CardTitle>
        <CardText>Job Description: {props.description}</CardText>
        <CardText hidden={!props.showUser}>
          Posted User: {props.postedUser.firstName} {props.postedUser.lastName}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default JobCard;
