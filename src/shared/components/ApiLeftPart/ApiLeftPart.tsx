import { useContext } from "react";
import { AppConfigContext } from "../../context/AppConfigContext";
import { SECTIONS_CONTENT } from "../../helpers/apiSectionsContent";
import SearchSection from "./components/SearchSection";
import SectionParentDiv from "./components/SectionParentDiv";

const ApiLeftPart = () => {
  const { apiFields } = useContext(AppConfigContext);

  return (
    <div className="flex w-full flex-col pt-4 h-full">
      <SearchSection />

      <div className="flex flex-col w-full py-2 gap-7">
        <SectionParentDiv
          text={"Empezando"}
          options={SECTIONS_CONTENT.INTRODUCCION}
        />
        <SectionParentDiv
          text={"Herramienta"}
          options={SECTIONS_CONTENT.TOOL}
        />
        <SectionParentDiv text={"Fields"} options={apiFields} />
      </div>
    </div>
  );
};

export default ApiLeftPart;
