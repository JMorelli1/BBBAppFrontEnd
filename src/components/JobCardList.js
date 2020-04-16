import React, { useState } from "react";
import { Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import CollapseUserList from "../components/CollapseUserList.js";
import DeleteButton from "./DeleteButton";

const JobCardList = (props) => {
  const [assignedUser, setAssignedUser] = useState([]);

  const toggleAssignedUsers = (assignedUserIndex) => {
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
        <Col>
          <JobCard key={postedJob.jobId} showUser={true} {...postedJob} />
          <Button
            color="primary"
            style={{ margin: 20 }}
            onClick={() => toggleAssignedUsers(index)}
          >
            Assigned Users
          </Button>
          <Link to={`/editjob/${postedJob.jobId}`}>
            <Button color="primary">Edit</Button>
          </Link>
          <DeleteButton
            refreshPage={props.refreshPage}
            selectedId={postedJob.jobId}
            deletedItem={"Job"}
          />
          <CollapseUserList
            userList={postedJob.assignedUsers}
            index={index}
            users={assignedUser}
          />
        </Col>,
      ])}
    </>
  );
};
export default JobCardList;
