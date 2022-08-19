import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./layout/NavBar/NavBar";
import SideBar from "./layout/SideBar/SideBar";
import DatasetsProvider from "./shared/context/DatasetsContext";
import ApiDocsProvider from "./shared/context/ApiDocsContext";
import ApiSideBar from "./layout/ApiSideBar/ApiSideBar";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openApiSideBar, setOpenApiSideBar] = useState(false);

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
    <div className="">
      <DatasetsProvider>
        <ApiDocsProvider>
          <ToastContainer />
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
          <Outlet />
        </ApiDocsProvider>
      </DatasetsProvider>
    </div>
  );
}

export default App;
