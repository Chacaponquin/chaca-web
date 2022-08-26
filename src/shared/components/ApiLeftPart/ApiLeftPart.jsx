import React from "react";
import { useContext } from "react";
import { ApiDocsContext } from "../../context/ApiDocsContext";
import { SECTIONS_CONTENT } from "../../helpers/apiSectionsContent";
import SearchSection from "./components/SearchSection";
import SectionParentDiv from "./components/SectionParentDiv";

const ApiLeftPart = () => {
  const { apiFields } = useContext(ApiDocsContext);

  return (
    <div className="flex w-full flex-col pt-4 h-full">
      <SearchSection />

      <div className="flex flex-col w-full py-2 gap-7">
        <SectionParentDiv
          text={"Empezando"}
          options={SECTIONS_CONTENT.INTRODUCCION}
        />
        <SectionParentDiv text={"Fields"} options={apiFields} />
      </div>
    </div>
  );
};

export default ApiLeftPart;
