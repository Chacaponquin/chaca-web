import React from "react";
import { API_SECTIONS } from "../../helpers/SECTIONS";
import FieldDoc from "./components/FileDoc/FieldDoc";
import AboutQuerys from "./components/IntroductionDocs/AboutQuerys";
import Autorization from "./components/IntroductionDocs/Autorization";
import Indications from "./components/IntroductionDocs/Indications";
import FirstExample from "./components/ToolDocs/FirstExample";

const Documentation = ({ subSectionSelect }) => {
  if (subSectionSelect) {
    if (subSectionSelect.section === API_SECTIONS.FIELDS) {
      return <FieldDoc fieldData={subSectionSelect.subElement} />;
    } else if (subSectionSelect.section === API_SECTIONS.INTRODUCCION) {
      if (subSectionSelect.subElement.id === 2) return <Indications />;
      else if (subSectionSelect.subElement.id === 3) return <Autorization />;
      else if (subSectionSelect.subElement.id) return <AboutQuerys />;
    } else if (subSectionSelect.section === API_SECTIONS.TOOL) {
      if (subSectionSelect.subElement.id === 1) return <FirstExample />;
    }
  }

  return <></>;
};

export default Documentation;
