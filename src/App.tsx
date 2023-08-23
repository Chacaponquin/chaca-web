import { useContext } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { LandingNavBar, AppNavBar } from "./containers/Layout/components"
import { AppLoader } from "@modules/app/components/Loader"
import { AppContext } from "@modules/app/context"
import { UserContext } from "@modules/user/context"
import { APP_ROUTES } from "@modules/app/constants"

function App() {
  const { loading } = useContext(UserContext)
  const { initialFetchLoading } = useContext(AppContext)

  const location = useLocation()

  return (
    <AppLoader loading={initialFetchLoading || loading}>
      <div className="flex flex-col w-full min-h-screen h-screen">
        {location.pathname !== APP_ROUTES.ROOT ? <AppNavBar /> : <LandingNavBar />}
        <Outlet />
      </div>
    </AppLoader>
  )
}

export default App
