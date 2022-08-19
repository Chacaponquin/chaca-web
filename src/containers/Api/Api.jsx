import React from "react";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";
import Documentation from "./components/Documentation/Documentation";
import "./api.css";
import { ApiDocsContext } from "../../shared/context/ApiDocsContext";
import { useContext } from "react";
import ApiLeftPart from "../../shared/components/ApiLeftPart/ApiLeftPart";

const Api = () => {
  const { loading, subSectionSelect } = useContext(ApiDocsContext);

  if (loading) {
    return (
      <div className="w-full flex justify-center pt-10">
        <LoaderContainer
          loading={loading}
          className="w-[220px] esm:w-[120px]"
          children={<div></div>}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex -translate-y-8 border-b-2">
      <div className="w-[400px] min-w-[250px] lg:block hidden">
        <ApiLeftPart />
      </div>

      <div className="w-full flex border-l-2  esm:px-5 px-20">
        <Documentation subSectionSelect={subSectionSelect} />
      </div>
    </div>
  );
};

export default Api;
