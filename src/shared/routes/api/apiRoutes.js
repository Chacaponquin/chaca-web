import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getTokenCookie = () => {
  const tokenCookie = cookies.get("jwt");

  if (tokenCookie) {
    localStorage.setItem("token", tokenCookie);
  }

  return localStorage.getItem("token") || null;
};

axiosInstance.interceptors.request.use(
  (req) => {
    req.headers.authorization = getTokenCookie();

    return req;
  },
  (error) => Promise.reject(error)
);

export const apiRoutes = {
  AUTH_ROUTES: {
    LOGIN: "/auth/signInUser",
    SIGN_UP: "/auth/createUser",
    GET_USER_BY_TOKEN: "/auth/getUserByToken",
    GOOGLE_AUTH: "/auth/googleAuth",
    GITHUB_AUTH: "/auth/githubAuth",
  },
  GET_FIELDS: "/util/getFields",
  GET_NO_USER_LIMITS: "/util/getNoUserLimits",
  GET_MY_SCHEMAS: "/user/getMySchemas",
  DELETE_SCHEMA: "/user/deleteSchema",
  GET_API_OPTIONS: "/util/getApiOptions",
  GET_FILE_OPTIONS: "/util/getFileConfigFileOptions",
};
