import { ReactElement, Fragment } from "react"
import { Navigate } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"
import { useUser } from "@modules/user/hooks"
import { Loading } from "./components"

export default function NoUserRoute({ children }: { children: ReactElement }) {
  const { actualUser, fetchUserLoading } = useUser()

  return (
    <Fragment>
      {fetchUserLoading ? (
        <Loading />
      ) : (
        <Fragment>{!actualUser ? children : <Navigate to={APP_ROUTES.HOME} />}</Fragment>
      )}
    </Fragment>
  )
}
