import axios from "axios";
import { getTokenCookie } from "../../helpers/getTokenCookie";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (req) => {
    const token = getTokenCookie();
    if (req.headers && token) req.headers.authorization = token;

    return req;
  },
  (error) => Promise.reject(error)
);

export const API_ROUTES = {
  AUTH_ROUTES: {
    LOGIN: "/auth/signInUser",
    SIGN_UP: "/auth/createUser",
    GET_USER_BY_TOKEN: "/auth/getUserByToken",
    GOOGLE_AUTH: "/auth/googleAuth",
    GITHUB_AUTH: "/auth/githubAuth",
  },
  GET_NO_USER_LIMITS: "/util/getNoUserLimits",
  GET_MY_SCHEMAS: "/user/getMySchemas",
  DELETE_SCHEMA: "/user/deleteSchema",
  GET_API_OPTIONS: "/util/getApiOptions",
  GET_FILE_OPTIONS: "/util/getFileConfig",
  GET_FAQ: "/util/getFAQ",
  CREATE_USER_MESSAGE: "/user/createUserMessage",
  GET_API_DOC: "/docs/getApiSections",
  DOCS: {
    GET_CUSTOM_FORM_GUIDES: "/docs/getCustomFormGuides",
  },
};
