import React from 'react';
import {
    Card, CardText, CardBody,CardTitle
  } from 'reactstrap';

const JobCard = props => {
    const job = props;
    return(
      <>
      <Card style={{background: 'silver'}}>
        <CardBody>
          <CardTitle>Job Title: {job.jobTitle}</CardTitle>
          <CardText>Job Description: {job.description}</CardText>
          <CardText hidden={!props.showUser}>Posted User: {job.postedUser.firstName} {job.postedUser.lastName}</CardText>
        </CardBody>
      </Card>
      </>
    );
}

export default JobCard;