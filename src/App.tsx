import { Fragment, useState, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./layout/NavBar/NavBar";
import SideBar from "./layout/SideBar/SideBar";
import DatasetsProvider from "./shared/context/DatasetsContext";
import { APP_ROUTES } from "./shared/routes/app/APP_ROUTES";
import OptionsBar from "./layout/OptionsBar/OptionsBar";
import LoaderContainer from "./shared/components/Loader/LoaderContainer";
import { UserContext } from "./shared/context/UserContext";
import { AppConfigContext } from "./shared/context/AppConfigContext";

const AppLoader = ({
  loading,
  children,
}: {
  loading: boolean;
  children: JSX.Element;
}) => {
  return (
    <Fragment>
      {loading ? (
        <div className="w-screen overflow-hidden h-screen flex justify-center items-center">
          <LoaderContainer
            className={"w-[200px] esm:w-[120px]"}
            loading={loading}
          />
        </div>
      ) : (
        children
      )}
    </Fragment>
  );
};

function App() {
  const { loading } = useContext(UserContext);
  const { initialFetchLoading } = useContext(AppConfigContext);

  const [openSideBar, setOpenSideBar] = useState(false);

  const location = useLocation();

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  return (
    <AppLoader loading={initialFetchLoading || loading}>
      <div className="flex flex-col h-screen">
        <DatasetsProvider>
          <Fragment>
            <ToastContainer autoClose={5000} hideProgressBar={true} />

            <SideBar
              openSideBar={openSideBar}
              handleCloseSideBar={handleCloseSideBar}
            />

            <div className="flex">
              {location.pathname !== APP_ROUTES.ROOT ? (
                <OptionsBar />
              ) : (
                <NavBar handleOpenSideBar={handleOpenSideBar} />
              )}

              <Outlet />
            </div>
          </Fragment>
        </DatasetsProvider>
      </div>
    </AppLoader>
  );
}

export default App;
