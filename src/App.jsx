import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./layout/NavBar/NavBar";
import SideBar from "./layout/SideBar/SideBar";
import DatasetsProvider from "./shared/context/DatasetsContext";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  return (
    <div className="">
      <DatasetsProvider>
        <ToastContainer />
        <SideBar
          openSideBar={openSideBar}
          handleCloseSideBar={handleCloseSideBar}
        />
        <NavBar handleOpenSideBar={handleOpenSideBar} />
        <Outlet />
      </DatasetsProvider>
    </div>
  );
}

export default App;
