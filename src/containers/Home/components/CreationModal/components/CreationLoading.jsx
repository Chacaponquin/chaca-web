import React from "react";
import LoaderContainer from "../../../../../shared/components/Loader/LoaderContainer";

const CreationLoading = ({ porcent }) => {
  return (
    <div className="w-screen h-screen fixed bg-white/50 top-0 left-0 z-[50] flex justify-center items-center">
      <div className="px-10 py-10 w-[80%] flex flex-col items-center bg-white">
        <LoaderContainer className={"w-[200px] mb-10"} loading={true} />
        <ProgessBar porcent={porcent} />
      </div>
    </div>
  );
};

const ProgessBar = ({ porcent }) => {
  return (
    <div className="w-[700px] rounded-full bg-slate-100 h-[17px]">
      <div
        className={
          "absolute rounded-full bg-gradient-to-r from-principalColor to-secondColor h-[17px] transition-all duration-75"
        }
        style={{ width: `${Number((700 * porcent) / 100)}px` }}
      ></div>
    </div>
  );
};

export default CreationLoading;
