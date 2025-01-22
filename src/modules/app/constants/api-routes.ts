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
  API: {
    TRANSFORM_DATASET: "/api/v1/dataset/transform",
  },
} as const
