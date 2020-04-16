import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, Container } from "reactstrap";
import { updateJob, loadJobData } from "../../services/JobService.js";
import DisplayAlert from "../../components/DisplayAlert.js";
import EditFormInput from "../../components/EditFormInput.js";

const JobEdit = () => {
  const { jobId } = useParams();
  const history = useHistory();

  const [jobInfo, setJobInfo] = useState({});
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      await loadJobData(jobId).then((jobData) => {
        if (jobData) {
          setJobInfo(jobData);
        } else {
          setAlertStatus("fail");
          setAlertMessage("There was an error uploading the user!");
          setDisplayAlert(true);
        }
      });
    };
    loadData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newJob = {
      jobTitle: event.target.jobTitle.value,
      description: event.target.description.value,
    };
    await updateJob(jobId, newJob).then((successfullyUpdated) => {
      if (successfullyUpdated) {
        setAlertStatus("success");
        setAlertMessage("Congragulations, you successfully updated user!");
        setDisplayAlert(true);
      }
    });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Container>
        <Button
          onClick={() => {
            history.push("/jobs");
          }}
          color="secondary"
        >
          Return
        </Button>
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

export default JobEdit;
