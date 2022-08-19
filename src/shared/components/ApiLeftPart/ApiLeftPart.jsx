import React from "react";
import { useContext } from "react";
import { ApiDocsContext } from "../../context/ApiDocsContext";
import SearchSection from "./components/SearchSection";
import SectionParentDiv from "./components/SectionParentDiv";
import { SECTIONS_CONTENT } from "./helpers/SectionsContent";

const ApiLeftPart = () => {
  const { apiFields } = useContext(ApiDocsContext);

  return (
    <div className="flex w-full flex-col pt-4 h-full">
      <SearchSection />

      <div className="flex flex-col w-full py-5 gap-3">
        <SectionParentDiv
          text={"Introduccion"}
          options={SECTIONS_CONTENT.INTRODUCCION}
        />
        <SectionParentDiv
          text={"Fields"}
          options={apiFields}
          openOptions={true}
        />
      </div>
    </div>
  );
};

export default ApiLeftPart;
