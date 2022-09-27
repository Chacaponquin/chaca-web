import React, { ReactElement } from "react";
import Loader from "./Loader";

interface LoaderProps {
  loading: boolean;
  className: string;
  children?: ReactElement;
}

const LoaderContainer = ({
  loading,
  className,
  children = <></>,
}: LoaderProps) => {
  return (
    <>
      {loading ? (
        <div className={className}>
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderContainer;
