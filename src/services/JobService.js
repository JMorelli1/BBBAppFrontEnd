import axios from "axios";

export const getAllJobs = async () => {
  return axios
    .get("/api/jobs")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const createJob = async (newJob, userId) => {
  return axios
    .post(`/api/jobs/&{userId}`, {
      jobTitle: newJob.jobTitle,
      description: newJob.description,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
