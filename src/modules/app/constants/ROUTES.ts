export const APP_ROUTES = {
  ROOT: "/",
  AUTH: {
    LOGIN: "/login",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
  },
  HOME: "/home",
  CONTACT_US: "/contact-us",
  NOT_FOUND: "/not-found",

  DOCS: {
    API: {
      OVERVIEW: "/api/overviw",
      SCHEMA_OPTION: "/api/schema-option",
      SCHEMA: "/api/schema",
    },
    GUIDES: {
      START: "/guides/getiing-started",
      COMMAND: "/guides/command-line",
      USAGE: "/guides/usage",
    },
  },
} as const

export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    GET_USER_BY_TOKEN: "/auth/refresh",
    GOOGLE_AUTH: "/auth/google",
    GITHUB_AUTH: "/auth/github",
  },
  GET_MODULES: (version: string) => `/modules/${version}`,
  GET_FILE_OPTIONS: "/dataset/file-options",
  CREATE_USER_MESSAGE: "/user-message/new-message",
  DOWNLOAD_FILE(id: string) {
    return `dataset/download/${id}`
  },
} as const
