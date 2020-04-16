import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropDownJobs = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [selectedJob, setSelectedJob] = useState("Select Job");

  const handleClick = (jobTitle, jobId) => {
    setSelectedJob(jobTitle);
    props.setSelectedJobId(jobId);
  };

  const toggle = () => {
    setDropDown(!dropDown);
  };

  return (
    <Dropdown isOpen={dropDown} onClick={toggle}>
      <DropdownToggle caret>{selectedJob}</DropdownToggle>
      <DropdownMenu>
        {props.jobs.map((job) => [
          <DropdownItem
            onClick={() => {
              handleClick(job.jobTitle, job.jobId);
            }}
            active={props.selctedJobId === job.jobId ? true : false}
          >
            {job.jobTitle}
          </DropdownItem>,
        ])}
      </DropdownMenu>
    </Dropdown>
  );
};
export default DropDownJobs;
