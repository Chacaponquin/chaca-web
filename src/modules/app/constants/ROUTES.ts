export const APP_ROUTES = {
  ROOT: "/",
  AUTH_ROUTES: {
    LOGIN: "/login",
    SIGN_UP: "/signUp",
    FORGOT_PASSWORD: "/forgotPassword",
  },
  HOME: "/home",
  API: "/api/:section/:subSection",
  DEFAULT_INIT_DOC_ROUTE: "/api/guide/what-is-chaca?",
  DOCS: "/docs",
  MODELS: "/models",
  CONTACT_US: "/contactUs",
  NOT_FOUND: "/notFound",
  ADMIN: {
    ROOT: "/admin/*",
    EDIT_DOC: "/editDocs",
  },
} as const

export const API_ROUTES = {
  AUTH_ROUTES: {
    LOGIN: "/auth/signIn",
    SIGN_UP: "/auth/signUp",
    GET_USER_BY_TOKEN: "/auth/userByToken",
    GOOGLE_AUTH: "/auth/google",
    GITHUB_AUTH: "/auth/github",
  },
  GET_NO_USER_LIMITS: "/web_api/noUserLimits",
  GET_API_OPTIONS: "/web_api/schemas",
  GET_FILE_OPTIONS: "/web_api/fileConfig",
  GET_FAQ: "/web_api/faq",
  CREATE_USER_MESSAGE: "/user_message/newMessage",
} as const
