import React, { useState } from "react";
import JobCard from "./JobCard";
import { Button, Collapse, Col } from "reactstrap";
import UserCard from "./UserCard";

const JobCardList = (props) => {
  const [assignedUser, setAssignedUser] = useState([]);

  const toggleAssignedUser = (assignedUserIndex) => {
    if (!assignedUser.includes(assignedUserIndex)) {
      setAssignedUser(assignedUser.concat(assignedUserIndex));
    } else {
      setAssignedUser(
        assignedUser.filter((index) => index !== assignedUserIndex)
      );
    }
  };

  return (
    <>
      {props.postedJobs.map((postedJob, index) => [
        <JobCard key={postedJob.jobId} showUser={true} {...postedJob} />,
        <Button
          color="primary"
          style={{ margin: 20 }}
          onClick={() => toggleAssignedUser(index)}
        >
          Assigned Users
        </Button>,
        postedJob.assignedUsers.map((user) => {
          return (
            <Collapse isOpen={assignedUser.includes(index)}>
              <Col
                sm={{ order: 2, offset: 2, size: 5 }}
                style={{ marginBottom: 30 }}
              >
                <UserCard key={user.userId} {...user} />
              </Col>
            </Collapse>
          );
        }),
      ])}
    </>
  );
};
export default JobCardList;
