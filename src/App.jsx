import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
