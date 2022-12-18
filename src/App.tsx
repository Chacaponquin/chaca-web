import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./layout/NavBar/NavBar";
import SideBar from "./layout/SideBar/SideBar";
import DatasetsProvider from "./shared/context/DatasetsContext";
import ApiSideBar from "./layout/ApiSideBar/ApiSideBar";
import { useLocation } from "react-router-dom";
import { APP_ROUTES } from "./shared/routes/app/APP_ROUTES";

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
        location.pathname === APP_ROUTES.HOME ? "flex flex-col h-screen" : ""
      }
    >
      <DatasetsProvider>
        <React.Fragment>
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
              location.pathname !== APP_ROUTES.ROOT
                ? "px-10 h-full esm:px-5 overflow-auto"
                : ""
            }
          >
            <Outlet />
          </div>
        </React.Fragment>
      </DatasetsProvider>
    </div>
  );
}

export default App;
