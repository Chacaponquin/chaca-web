import React from "react";
import loader from "../../../assets/icons/loader.svg";

const LoaderContainer = ({ loading, className, children }) => {
  return (
    <>
      {loading ? (
        <div className={className}>
          <img src={loader} alt="loader" className="w-full" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderContainer;
