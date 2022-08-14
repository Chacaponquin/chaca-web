import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    req.headers.authorization = token ? token : null;

    return req;
  },
  (error) => Promise.reject(error)
);

export const apiRoutes = {
  AUTH_ROUTES: {
    LOGIN: "/auth/signInUser",
    SIGN_UP: "/auth/createUser",
    GET_USER_BY_TOKEN: "/auth/getUserByToken",
  },
  GET_FIELDS: "/util/getFields",
  CREATE_DATA: "/createData",
  GET_NO_USER_LIMITS: "/util/getNoUserLimits",
};
