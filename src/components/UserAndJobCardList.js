import React, { useState } from "react";
import JobCard from "./JobCard";
import UserCard from "./UserCard";
import { Col, Collapse, Button } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const UserAndJobCardList = (props) => {
  const [postedJob, setPostedJob] = useState([]);
  const [assignedJob, setAssignedJob] = useState([]);

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
    <>
      {props.users.map((user, index) => {
        return [
          <UserCard key={user.userId} {...user} />,
          <Button
            color="primary"
            style={{ margin: 10 }}
            onClick={() => togglePostedJobs(index)}
          >
            Posted Jobs
          </Button>,
          <Button
            color="primary"
            style={{ margin: 10 }}
            onClick={() => toggleAssignedJobs(index)}
          >
            Assigned Jobs
          </Button>,
          <Link to={`/useredit/${user.userId}`}>
            <Button color="primary">Edit</Button>
          </Link>,
          <DeleteButton selectedId={user.userId} />,
          user.postedJobs.map((job) => {
            return (
              <Collapse isOpen={postedJob.includes(index)}>
                <Col sm={{ order: 1, offset: 2 }} style={{ marginBottom: 20 }}>
                  <JobCard key={job.jobId} showUser={false} {...job} />
                </Col>
              </Collapse>
            );
          }),
          user.assignedJobs.map((job) => {
            return (
              <Collapse isOpen={assignedJob.includes(index)}>
                <Col sm={{ order: 2, offset: 2 }} style={{ marginBottom: 20 }}>
                  <JobCard key={job.jobId} showUser={true} {...job} />
                </Col>
              </Collapse>
            );
          }),
        ];
      })}
    </>
  );
};
export default UserAndJobCardList;
