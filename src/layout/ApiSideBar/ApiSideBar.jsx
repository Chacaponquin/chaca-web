import React from "react";
import Icon from "supercons";
import clsx from "clsx";
import ApiLeftPart from "../../shared/components/ApiLeftPart/ApiLeftPart";

const ApiSideBar = ({ handleCloseSideBar, openApiSideBar }) => {
  const sideBarClass = () => {
    return clsx(
      "w-[350px] esm:w-[300px] flex flex-col bg-white h-screen overflow-y-auto py-5 px-3 duration-300 transition-all esm:px-2 exsm:w-screen",
      {
        "-translate-x-full": !openApiSideBar,
      },
      { "translate-x-0": openApiSideBar }
    );
  };

  const containerClass = () => {
    return clsx(
      "w-screen h-screen fixed top-0 left-0 transition-all duration-300 ",
      { "-z-10 bg-transparent": !openApiSideBar },
      { "z-50 bg-black/50": openApiSideBar }
    );
  };

  return (
    <div className={containerClass()}>
      <div className={sideBarClass()}>
        <div className="w-full flex justify-end mb-4">
          <button onClick={handleCloseSideBar}>
            <Icon glyph="view-close" />
          </button>
        </div>
        <ApiLeftPart />
      </div>
    </div>
  );
};

export default ApiSideBar;
