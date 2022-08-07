import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const apiRoutes = {
  AUTH_ROUTES: { LOGIN: "/createUser", SIGN_UP: "/createUser" },
  GET_FIELDS: "/util/getFields",
  CREATE_DATA: "/main/createData",
};
