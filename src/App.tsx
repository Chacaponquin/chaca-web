import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { AppLoader } from "@modules/app/components/Loader"
import { AppContext } from "@modules/app/context"
import { useUserServices } from "@modules/user/services"

function App() {
  const { fetchUserLoading } = useUserServices()
  const { initialFetchLoading } = useContext(AppContext)

  return (
    <AppLoader loading={initialFetchLoading || fetchUserLoading}>
      <Outlet />
    </AppLoader>
  )
}

export default App
