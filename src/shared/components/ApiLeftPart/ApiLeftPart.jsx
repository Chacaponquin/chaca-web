import React from "react";
import { useContext } from "react";
import { ApiDocsContext } from "../../context/ApiDocsContext";
import SearchSection from "./components/SearchSection";
import FieldsSection from "./components/Sections/FieldsSection";

const ApiLeftPart = () => {
  const { apiFields, subSectionSelect, handleChangeSubSection } =
    useContext(ApiDocsContext);

  return (
    <div className="flex w-full flex-col pt-4 h-full">
      <SearchSection />

      <div className="flex flex-col w-full py-5">
        <FieldsSection
          apiFields={apiFields}
          handleChangeSubSection={handleChangeSubSection}
          subSectionSelect={subSectionSelect}
        />
      </div>
    </div>
  );
};

export default ApiLeftPart;
