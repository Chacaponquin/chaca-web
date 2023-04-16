import { useContext } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { APP_ROUTES } from "@modules/shared/routes"
import { NavBar, AppNavBar } from "./layout"
import { AppLoader } from "@modules/shared/components/Loader"
import { AppConfigContext } from "@modules/shared/modules/appConfig/context"
import { UserContext } from "@modules/user/context"

function App() {
  const { loading } = useContext(UserContext)
  const { initialFetchLoading } = useContext(AppConfigContext)

  const location = useLocation()

  return (
    <AppLoader loading={initialFetchLoading || loading}>
      <div className='flex flex-col w-full min-h-screen h-screen'>
        {location.pathname !== APP_ROUTES.ROOT ? <AppNavBar /> : <NavBar />}
        <Outlet />
      </div>
    </AppLoader>
  )
}

export default App
