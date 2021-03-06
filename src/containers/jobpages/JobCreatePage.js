import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "reactstrap";
import { loadAllUserData } from "../../services/UserService.js";
import { createJob } from "../../services/JobService.js";
import DisplayAlert from "../../components/DisplayAlert.js";
import EditFormInput from "../../components/EditFormInput.js";
import UserListGroup from "../../components/UserListGroup.js";

const JobCreatePage = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [isSelected, setIsSelected] = useState([]);

  const jobInfo = {};

  useEffect(() => {
    const loadData = async () => {
      await loadAllUserData()
        .then((userData) => {
          if (userData) setUserInfo(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    loadData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newJob = {
      jobTitle: event.target.jobTitle.value,
      description: event.target.description.value,
    };
    await createJob(newJob, isSelected).then((isCreated) => {
      if (isCreated) {
        setDisplayAlert(true);
        setAlertStatus("success");
        setAlertMessage("You have successfully created a new job!");
      } else {
        setDisplayAlert(true);
        setAlertStatus("fail");
        setAlertMessage("Error creating a new job!");
      }
    });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Container style={{ marginTop: 30 }}>
        <DisplayAlert
          status={alertStatus}
          showAlert={displayAlert}
          message={alertMessage}
        />
        <UserListGroup
          users={userInfo}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <Form onSubmit={handleSubmit}>
          <EditFormInput
            name="jobTitle"
            label="Job Title"
            defaultValue={jobInfo.jobTitle}
          />
          <EditFormInput
            name="description"
            label="Job Description"
            defaultValue={jobInfo.description}
          />
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default JobCreatePage;
