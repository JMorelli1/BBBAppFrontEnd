import React, { useState } from "react";
import JobCard from "./JobCard";
import UserCard from "./UserCard";
import { Col, Collapse, Button } from "reactstrap";
import { Link } from "react-router-dom";

const UserAndJobCardList = (props) => {
  const [activePostedJob, setActivePostedJob] = useState([]);
  const [activeAssignedJob, setActiveAssignedJob] = useState([]);

  const togglePostedJobButtons = (buttonLocationKey) => {
    if (!activePostedJob.includes(buttonLocationKey)) {
      if (activeAssignedJob.includes(buttonLocationKey)) {
        setActiveAssignedJob([]);
      }
      setActivePostedJob(activePostedJob.concat(buttonLocationKey));
    } else {
      setActivePostedJob(
        activePostedJob.filter((index) => index !== buttonLocationKey)
      );
    }
  };

  const toggleAssignedJobButtons = (buttonLocationKey) => {
    if (!activeAssignedJob.includes(buttonLocationKey)) {
      if (activePostedJob.includes(buttonLocationKey)) {
        setActivePostedJob([]);
      }
      setActiveAssignedJob(activeAssignedJob.concat(buttonLocationKey));
    } else {
      setActiveAssignedJob(
        activeAssignedJob.filter((index) => index !== buttonLocationKey)
      );
    }
  };

  return (
    <>
      {props.users.map((user, index) => {
        return [
          <UserCard key={user.userId} {...user} />,
          <Button
            color="primary"
            style={{ margin: 20 }}
            onClick={() => togglePostedJobButtons(index)}
          >
            Posted Jobs
          </Button>,
          <Button
            color="primary"
            style={{ margin: 20 }}
            onClick={() => toggleAssignedJobButtons(index)}
          >
            Assigned Jobs
          </Button>,
          <Link to={`/useredit/${user.userId}`}>
            <Button color="primary">Edit</Button>
          </Link>,
          user.postedJobs.map((job) => {
            return (
              <Collapse isOpen={activePostedJob.includes(index)}>
                <Col sm={{ order: 1, offset: 2 }} style={{ marginBottom: 20 }}>
                  <JobCard key={job.jobId} showUser={false} {...job} />
                </Col>
              </Collapse>
            );
          }),
          user.assignedJobs.map((job) => {
            return (
              <Collapse isOpen={activeAssignedJob.includes(index)}>
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
