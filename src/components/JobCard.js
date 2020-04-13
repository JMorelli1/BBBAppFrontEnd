import React from 'react';
import {
    Card, CardText, CardBody,CardTitle
  } from 'reactstrap';

const JobCard = (props) => {
    const job = props;
    return(
      <>
      <Card style={{background: 'silver'}}>
        <CardBody>
          <CardTitle>{job.jobTitle}</CardTitle>
          <CardText>{job.description}</CardText>
        </CardBody>
      </Card>
      </>
    );
}

export default JobCard;