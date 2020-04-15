import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import CollapseJobList from "./CollapseJobList";

const UserAndJobCard = (props) => {
  const [postedJob, setPostedJob] = useState([]);
  const [assignedJob, setAssignedJob] = useState([]);

  useEffect(() => {}, [postedJob, assignedJob]);

  const togglePostedJobs = (buttonKey) => {
    if (!postedJob.includes(buttonKey)) {
      if (assignedJob.includes(buttonKey)) {
        setAssignedJob([]);
      }
      setPostedJob(postedJob.concat(buttonKey));
    } else {
      setPostedJob(postedJob.filter((index) => index !== buttonKey));
    }
  };

  const toggleAssignedJobs = (buttonKey) => {
    if (!assignedJob.includes(buttonKey)) {
      if (postedJob.includes(buttonKey)) {
        setPostedJob([]);
      }
      setAssignedJob(assignedJob.concat(buttonKey));
    } else {
      setAssignedJob(assignedJob.filter((index) => index !== buttonKey));
    }
  };

  return (
    <Col>
      <UserCard key={props.user.userId} showUserImg={true} {...props.user} />
      <Button
        color="primary"
        style={{ margin: 10 }}
        onClick={() => togglePostedJobs(props.index)}
      >
        Posted Jobs
      </Button>
      <Button
        color="primary"
        style={{ margin: 10 }}
        onClick={() => toggleAssignedJobs(props.index)}
      >
        Assigned Jobs
      </Button>
      <Link to={`/useredit/${props.user.userId}`}>
        <Button color="primary">Edit</Button>
      </Link>
      <DeleteButton
        selectedId={props.user.userId}
        refreshPage={props.refreshPage}
      />
      <CollapseJobList
        jobList={props.user.postedJobs}
        index={props.index}
        showJobs={postedJob}
      />
      <CollapseJobList
        jobList={props.user.assignedJobs}
        index={props.index}
        showJobs={assignedJob}
      />
    </Col>
  );
};
export default UserAndJobCard;
