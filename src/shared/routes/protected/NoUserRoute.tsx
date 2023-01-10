import React, { useContext, ReactElement } from "react"
import { UserContext } from "../../context/UserContext"
import { Navigate } from "react-router-dom"
import { APP_ROUTES } from "../app/APP_ROUTES"

const NoUserRoute = ({ children }: { children: ReactElement }) => {
  const { actualUser } = useContext(UserContext)

  return <>{!actualUser ? children : <Navigate to={APP_ROUTES.HOME} />}</>
}

export default NoUserRoute
