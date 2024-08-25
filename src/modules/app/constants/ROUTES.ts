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
  AUTH_ROUTES: {
    LOGIN: "/auth/signIn",
    SIGN_UP: "/auth/signUp",
    GET_USER_BY_TOKEN: "/auth/refresh",
    GOOGLE_AUTH: "/auth/google",
    GITHUB_AUTH: "/auth/github",
  },
  GET_NO_USER_LIMITS: "/web-api/no-user-limits",
  GET_SCHEMAS: (version: string) => `/web-api/schemas/${version}`,
  GET_FILE_OPTIONS: "/web-api/file-config",
  GET_FAQ: "/web-api/faq",
  CREATE_USER_MESSAGE: "/user-message/new-message",
  DOWNLOAD_FILE(id: string) {
    return `web-api/download-file/${id}`
  },
} as const
