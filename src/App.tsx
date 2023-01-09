import { Fragment, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DatasetsProvider from "./shared/context/DatasetsContext";
import { APP_ROUTES } from "./shared/routes/app/APP_ROUTES";
import LoaderContainer from "./shared/components/Loader/LoaderContainer";
import { UserContext } from "./shared/context/UserContext";
import { AppConfigContext } from "./shared/context/AppConfigContext";
import { NavBar, OptionsBar } from "./layout";

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

  const location = useLocation();

  return (
    <AppLoader loading={initialFetchLoading || loading}>
      <DatasetsProvider>
        <Fragment>
          <ToastContainer autoClose={5000} hideProgressBar={true} />

          <div className="flex">
            {location.pathname !== APP_ROUTES.ROOT ? (
              <OptionsBar />
            ) : (
              <NavBar />
            )}

            <Outlet />
          </div>
        </Fragment>
      </DatasetsProvider>
    </AppLoader>
  );
}

export default App;
