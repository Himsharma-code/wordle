import Axios from "./request";

export const register = async (data) => {
  return await Axios.post("/auth/register", data);
};
export const login = async (data) => {
  return await Axios.post("/auth", data);
};
