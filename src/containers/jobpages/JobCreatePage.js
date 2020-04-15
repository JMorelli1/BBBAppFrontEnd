import React, { useState } from "react";
import { Button, Form, Container } from "reactstrap";
import DisplayAlert from "../../components/DisplayAlert.js";
import EditFormInput from "../../components/EditFormInput.js";
import { createJob } from "../../services/JobService.js";

const JobCreatePage = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const jobInfo = {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newJob = {
      jobTitle: event.target.jobTitle.value,
      description: event.target.description.value,
    };
    await createJob(newJob).then((isCreated) => {
      if (isCreated) {
        setDisplayAlert(true);
        setAlertStatus("success");
        setAlertMessage("You have successfully created a new user!");
      } else {
        setDisplayAlert(true);
        setAlertStatus("fail");
        setAlertMessage("Error creating a new user!");
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
