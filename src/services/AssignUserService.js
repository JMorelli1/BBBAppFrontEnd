import axios from "axios";

export const assignUser = async (userId, jobId) => {
  return axios
    .post(`api/assignedusers/${userId}/${jobId}`)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
