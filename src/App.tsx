import { useContext } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { APP_ROUTES } from "@modules/shared/routes"
import { LandingNavBar, AppNavBar } from "./layout"
import { AppLoader } from "@modules/shared/components/Loader"
import { AppContext } from "@modules/shared/modules/app/context"
import { UserContext } from "@modules/user/context"

function App() {
  const { loading } = useContext(UserContext)
  const { initialFetchLoading } = useContext(AppContext)

  const location = useLocation()

  return (
    <AppLoader loading={initialFetchLoading || loading}>
      <div className='flex flex-col w-full min-h-screen h-screen'>
        {location.pathname !== APP_ROUTES.ROOT ? <AppNavBar /> : <LandingNavBar />}
        <Outlet />
      </div>
    </AppLoader>
  )
}

export default App
