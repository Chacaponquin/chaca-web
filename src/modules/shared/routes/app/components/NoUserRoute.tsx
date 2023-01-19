import { useContext, ReactElement, Fragment } from "react"
import { UserContext } from "@modules/user/context/UserContext"
import { Navigate } from "react-router-dom"
import { APP_ROUTES } from "../.."

const NoUserRoute = ({ children }: { children: ReactElement }) => {
  const { actualUser } = useContext(UserContext)

  return <Fragment>{!actualUser ? children : <Navigate to={APP_ROUTES.HOME} />}</Fragment>
}

export default NoUserRoute
