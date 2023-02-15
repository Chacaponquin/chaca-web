export const API_ROUTES = {
  AUTH_ROUTES: {
    LOGIN: "/auth/signIn",
    SIGN_UP: "/auth/signUp",
    GET_USER_BY_TOKEN: "/auth/userByToken",
    GOOGLE_AUTH: "/auth/googleAuth",
    GITHUB_AUTH: "/auth/githubAuth",
  },
  GET_NO_USER_LIMITS: "/util/noUserLimits",
  GET_MY_MODELS: "/user/datasetModels",
  DELETE_MODEL: "/user/deleteModel",
  GET_API_OPTIONS: "/util/schemas",
  GET_FILE_OPTIONS: "/util/fileConfig",
  GET_FAQ: "/util/faq",
  CREATE_USER_MESSAGE: "/userMessage/newMessage",
  DOCS: {
    GET_CUSTOM_FORM_GUIDES: "/docs/guides/custom",
    GET_REF_FORM_GUIDES: "/docs/guides/ref",
    GET_DOC_SECTIONS: "/docs/sections",
  },
  ADMIN: {
    AUTH: {
      LOGIN: "/admin/auth/signIn",
    },
    MEDIA: {
      UPLOAD_IMAGE: "/admin/media/uploadImage",
    },
    DOCS: {
      GET_DOCS: "/admin/docs/apiDocs",
      CREATE_API_DOC_SECTION: "/admin/docs/newApiDoc",
      CREATE_API_DOC_SUB_SECTION: "/admin/docs/newApiDocSubSection",
      DELETE_API_DOC_SUB_SECTION: "/admin/docs/deleteApiDocSubSection",
    },
  },
}
