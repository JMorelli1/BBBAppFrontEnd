import React, { useState, useEffect } from "react";
import DropDownUsers from "./DropDownUsers";
import DropDownJobs from "./DropDownJobs";
import { loadAllUserData } from "../../../services/UserService";
import { loadAllJobData } from "../../../services/JobService";
import { Container, Row, Col } from "reactstrap";

const AssignUser = () => {
  const [selectedUserId, setSelectedUserId] = useState();
  const [selectedJobId, setSelectedJobId] = useState();
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await loadAllUserData()
        .then((userData) => {
          if (userData) {
            setUsers(userData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      await loadAllJobData()
        .then((jobData) => {
          if (jobData) {
            setJobs(jobData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    loadData();
  }, []);

  return (
    <Container style={{ margin: 20 }}>
      <Row>
        <Col>
          <DropDownUsers
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
        </Col>
        <Col>
          <DropDownJobs
            jobs={jobs}
            selectedJobId={selectedJobId}
            setSelectedJobId={setSelectedJobId}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default AssignUser;
