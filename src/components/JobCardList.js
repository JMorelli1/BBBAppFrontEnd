import React from 'react';
import JobCard from './JobCard';

const JobCardList = (props) =>{
    return(
      <>
        {props.postedJobs.map(postedJob => <JobCard key={postedJob.jobId} {...postedJob}/>)}
      </>
    );
  }
export default JobCardList;