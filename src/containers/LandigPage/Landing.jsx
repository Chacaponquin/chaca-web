import React from "react";
import BgSVG from "./assets/BgSVG";
import { Link } from "react-router-dom";
import { appRoutes } from "../../shared/routes/app/appRoutes";

const Landing = () => {
  return (
    <div className="w-full absolute top-0 h-screen flex items-center -z-10 justify-center">
      <div className="h-screen w-full absolute top-0 left-0 -z-10 xl:block hidden">
        <BgSVG />
      </div>

      <div className="w-full flex justify-center lg:justify-end xl:px-20 esm:px-4 md:px-10">
        <div className="flex flex-col items-center xl:items-end lg:text-6xl gap-3 sm:text-5xl esm:text-4xl">
          <h1 className="font-fontExtraBold">Only think your data</h1>
          <div className="flex gap-4 flex-wrap items-center esm:flex-col">
            <h1 className="font-fontExtraBold">and create them with</h1>
            <h1 className="font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-r from-principalColor to-secondColor text-7xl sm:text-6xl esm:text-5xl">
              CH-DATA
            </h1>
          </div>

          <div className="flex items-center gap-10 mt-5 text-2xl">
            <button className="mb-0 font-fontBold">Read Docs</button>

            <Link
              to={appRoutes.HOME}
              className="bg-gradient-to-r from-principalColor to-secondColor font-fontBold text-white rounded-full px-10 shadow-lg py-3"
            >
              Let´s Create
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
