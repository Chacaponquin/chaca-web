import { Fragment, useContext } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { APP_ROUTES } from "@modules/shared/routes"
import { NavBar, OptionsBar } from "./layout"
import { AppLoader } from "@modules/shared/components/Loader"
import { AppConfigContext } from "@modules/shared/context"
import { UserContext } from "@modules/user/context"

function App() {
  const { loading } = useContext(UserContext)
  const { initialFetchLoading } = useContext(AppConfigContext)

  const location = useLocation()

  return (
    <AppLoader loading={initialFetchLoading || loading}>
      <Fragment>
        <ToastContainer autoClose={5000} hideProgressBar={true} />

        <div className='flex w-full min-h-screen h-screen'>
          {location.pathname !== APP_ROUTES.ROOT ? <OptionsBar /> : <NavBar />}

          <div className='w-full h-full'>
            <Outlet />
          </div>
        </div>
      </Fragment>
    </AppLoader>
  )
}

export default App
