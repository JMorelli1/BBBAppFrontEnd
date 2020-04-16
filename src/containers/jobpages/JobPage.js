import React, { useEffect, useState } from "react";
import JobCardList from "../../components/JobCardList";
import { Container, Row } from "reactstrap";
import { loadAllJobData } from "../../services/JobService";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await loadAllJobData().then((jobData) => {
        if (jobData) {
          setJobs(jobData);
        }
      });
    };
    loadData();
  }, []);

  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Row sm={2}>
        <JobCardList postedJobs={jobs} refreshPage={refreshPage} />
      </Row>
    </Container>
  );
};
export default JobPage;
