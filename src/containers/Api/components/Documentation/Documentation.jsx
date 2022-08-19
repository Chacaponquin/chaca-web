import React from "react";
import { API_SECTIONS } from "../../helpers/SECTIONS";
import FieldDoc from "./components/FieldDoc";
import Autorization from "./components/IntroductionDocs/Autorization";
import Indications from "./components/IntroductionDocs/Indications";

const Documentation = ({ subSectionSelect }) => {
  if (subSectionSelect) {
    if (subSectionSelect.section === API_SECTIONS.FIELDS) {
      return <FieldDoc fieldData={subSectionSelect.subElement} />;
    } else if (subSectionSelect.section === API_SECTIONS.INTRODUCCION) {
      if (subSectionSelect.subElement.id === 2) return <Indications />;
      else if (subSectionSelect.subElement.id === 3) return <Autorization />;
    }
  }

  return <></>;
};

export default Documentation;
