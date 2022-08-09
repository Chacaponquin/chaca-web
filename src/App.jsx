import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./layout/NavBar/NavBar";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
