import React from "react";
import { Collapse } from "reactstrap";
import JobCard from "../components/JobCard.js";

const CollapseJobList = (props) => {
  return [
    props.jobList.map((job) => {
      return (
        <Collapse
          isOpen={props.showJobs.includes(props.index)}
          style={{ marginBottom: 20 }}
        >
          <JobCard key={job.jobId} showUser={false} {...job} />
        </Collapse>
      );
    }),
  ];
};
export default CollapseJobList;
