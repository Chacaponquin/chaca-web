export const APP_ROUTES = {
  ROOT: "/",
  AUTH_ROUTES: {
    LOGIN: "/login",
    SIGN_UP: "/signUp",
    FORGOT_PASSWORD: "/forgotPassword",
  },
  HOME: "/home",
  CONTACT_US: "/contactUs",
  NOT_FOUND: "/notFound",
} as const

export const API_ROUTES = {
  AUTH_ROUTES: {
    LOGIN: "/auth/signIn",
    SIGN_UP: "/auth/signUp",
    GET_USER_BY_TOKEN: "/auth/userToken",
    GOOGLE_AUTH: "/auth/google",
    GITHUB_AUTH: "/auth/github",
  },
  GET_NO_USER_LIMITS: "/web-api/no-user-limits",
  GET_SCHEMAS: "/web-api/schemas",
  GET_FILE_OPTIONS: "/web-api/file-config",
  GET_FAQ: "/web-api/faq",
  CREATE_USER_MESSAGE: "/user-message/new-message",
} as const
