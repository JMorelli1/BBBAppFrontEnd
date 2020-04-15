import React, { useEffect, useState } from "react";
import JobCardList from "../../components/JobCardList";
import { Container, Row } from "reactstrap";
import { getAllJobs } from "../../services/JobService";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await getAllJobs().then((jobData) => {
        if (jobData) {
          setJobs(jobData);
        }
      });
    };
    loadData();
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <Row sm={2}>
        <JobCardList postedJobs={jobs} />
      </Row>
    </Container>
  );
};
export default JobPage;
