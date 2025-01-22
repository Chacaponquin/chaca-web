import { Fragment } from "react"
import { Navigate } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants/app-routes"
import { Loading } from "./components"
import useUser from "@modules/user/hooks/useUser"

export default function NoUserRoute({ children }: { children: React.ReactNode }) {
  const { actualUser, fetchUserLoading } = useUser()

  return (
    <>
      {fetchUserLoading ? (
        <Loading />
      ) : (
        <Fragment>{!actualUser ? children : <Navigate to={APP_ROUTES.HOME} />}</Fragment>
      )}
    </>
  )
}
