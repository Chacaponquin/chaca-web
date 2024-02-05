export const APP_ROUTES = {
  ROOT: "/",
  AUTH_ROUTES: {
    LOGIN: "/login",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
  },
  HOME: "/home",
  CONTACT_US: "/contact-us",
  NOT_FOUND: "/not-found",

  DOCS: { COMPLETE: "/docs/:section/:doc", ROOT: "/docs" },
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
  DOWNLOAD_FILE: (apiRoute: string, fileName: string) => {
    return `${apiRoute}/web-api/download-file/${fileName}`
  },
} as const
