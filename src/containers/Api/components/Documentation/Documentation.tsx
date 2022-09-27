import { API_SECTIONS } from "../../../../shared/constant/API_SECTIONS";
import FieldDoc from "./components/FileDoc/FieldDoc";
import { useContext } from "react";
import { ApiDocsContext } from "../../../../shared/context/ApiDocsContext";

const Documentation = () => {
  const { subSectionSelect } = useContext(ApiDocsContext);

  if (subSectionSelect.section === API_SECTIONS.FIELDS) {
    return <FieldDoc fieldData={subSectionSelect.subElement.element} />;
  } else return subSectionSelect.subElement.element;
};

export default Documentation;
