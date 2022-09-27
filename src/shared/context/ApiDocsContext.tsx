import { useState, ReactElement } from "react";
import { createContext } from "react";
import { API_SECTIONS } from "../constant/API_SECTIONS";
import { SECTIONS_CONTENT } from "../helpers/apiSectionsContent";
import { ApiSubSection } from "../interfaces/api.interface";

const ApiDocsContext = createContext<{
  subSectionSelect: ApiSubSection;
  handleChangeSubSection: (sub: ApiSubSection) => void;
}>({
  subSectionSelect: null!,
  handleChangeSubSection: () => {},
});

const ApiDocsProvider = ({ children = <></> }: { children: ReactElement }) => {
  const [subSectionSelect, setSubSectionSelect] = useState<ApiSubSection>({
    section: API_SECTIONS.INTRODUCCION,
    subElement: {
      element: SECTIONS_CONTENT.INTRODUCCION[0].subElement,
      id: SECTIONS_CONTENT.INTRODUCCION[0].id,
    },
  });

  const handleChangeSubSection = (sub: ApiSubSection) => {
    setSubSectionSelect(sub);
  };

  const data = {
    subSectionSelect,
    handleChangeSubSection,
  };

  return (
    <ApiDocsContext.Provider value={data}>{children}</ApiDocsContext.Provider>
  );
};

export default ApiDocsProvider;
export { ApiDocsContext };
