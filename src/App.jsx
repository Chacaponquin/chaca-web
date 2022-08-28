import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./layout/NavBar/NavBar";
import SideBar from "./layout/SideBar/SideBar";
import DatasetsProvider from "./shared/context/DatasetsContext";
import ApiDocsProvider from "./shared/context/ApiDocsContext";
import ApiSideBar from "./layout/ApiSideBar/ApiSideBar";
import { useLocation } from "react-router-dom";
import { appRoutes } from "./shared/routes/app/appRoutes";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openApiSideBar, setOpenApiSideBar] = useState(false);

  const location = useLocation();

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleOpenApiSideBar = () => {
    setOpenApiSideBar(true);
  };

  const handleCloseApiSideBar = () => {
    setOpenApiSideBar(false);
  };

  return (
    <div
      className={
        location.pathname === appRoutes.HOME ? "flex flex-col h-screen" : ""
      }
    >
      <DatasetsProvider>
        <ApiDocsProvider>
          <ToastContainer autoClose={5000} hideProgressBar={true} />
          <ApiSideBar
            openApiSideBar={openApiSideBar}
            handleCloseSideBar={handleCloseApiSideBar}
          />
          <SideBar
            openSideBar={openSideBar}
            handleCloseSideBar={handleCloseSideBar}
          />
          <NavBar
            handleOpenSideBar={handleOpenSideBar}
            handleOpenApiSideBar={handleOpenApiSideBar}
          />

          <div
            className={
              location.pathname !== appRoutes.ROOT && "px-10 h-full esm:px-5"
            }
          >
            <Outlet />
          </div>
        </ApiDocsProvider>
      </DatasetsProvider>
    </div>
  );
}

export default App;
