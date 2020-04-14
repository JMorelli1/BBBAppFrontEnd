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
