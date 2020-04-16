import axios from "axios";

export const loadJobData = (jobId) => {
  return axios
    .get(`/api/jobs/${jobId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const loadAllJobData = async () => {
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
    .post(`/api/jobs/${userId}`, {
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

export const updateJob = (jobId, newJob) => {
  return axios
    .put("/api/jobs", {
      jobId: jobId,
      jobTitle: newJob.jobTitle,
      description: newJob.description,
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const deleteJob = async (jobId) => {
  return axios
    .delete(`/api/jobs/${jobId}`)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
