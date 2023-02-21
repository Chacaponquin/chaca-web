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
}
