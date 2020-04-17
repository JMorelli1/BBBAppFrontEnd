import React, { useState, useEffect } from "react";
import DropDownUsers from "./DropDownUsers";
import DropDownJobs from "./DropDownJobs";
import { loadAllUserData } from "../../../services/UserService";
import { loadAllJobData } from "../../../services/JobService";
import { Container, Row, Col, Button } from "reactstrap";
import { assignUser } from "../../../services/AssignUserService";
import DisplayAlert from "../../../components/DisplayAlert";

const AssignUser = () => {
  const [selectedUserId, setSelectedUserId] = useState();
  const [selectedJobId, setSelectedJobId] = useState();
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleClick = async () => {
    await assignUser(selectedUserId, selectedJobId)
      .then((isAssigned) => {
        if (isAssigned) {
          setDisplayAlert(true);
          setAlertStatus("success");
          setAlertMessage("Successfully assigned user!");
        }
      })
      .catch((error) => {
        console.log(error);
        setDisplayAlert(true);
        setAlertStatus("fail");
        setAlertMessage("Error while assigning user!");
      });
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Row>
        <Col>
          <DisplayAlert
            status={alertStatus}
            showAlert={displayAlert}
            message={alertMessage}
          />
        </Col>
      </Row>
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
        <Button color="primary" onClick={handleClick}>
          Assign
        </Button>
      </Row>
    </Container>
  );
};
export default AssignUser;
