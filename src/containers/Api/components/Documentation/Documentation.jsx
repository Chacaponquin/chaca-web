import React from "react";
import { API_SECTIONS } from "../../helpers/SECTIONS";
import FieldDoc from "./components/FieldDoc";

const Documentation = ({ subSectionSelect }) => {
  if (subSectionSelect && subSectionSelect.section === API_SECTIONS.FIELDS) {
    return <FieldDoc fieldData={subSectionSelect.subElement} />;
  }

  return <></>;
};

export default Documentation;
