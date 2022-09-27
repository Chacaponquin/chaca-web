import { API_SECTIONS } from "../constant/API_SECTIONS";
import { v4 as uuid } from "uuid";
import { SectionContent } from "../interfaces/api.interface";
import Indications from "../../containers/Api/components/Documentation/components/IntroductionDocs/Indications";
import Autorization from "../../containers/Api/components/Documentation/components/IntroductionDocs/Autorization";
import AboutQuerys from "../../containers/Api/components/Documentation/components/IntroductionDocs/AboutQuerys";
import FirstExample from "../../containers/Api/components/Documentation/components/ToolDocs/FirstExample";

export const SECTIONS_CONTENT: SectionContent = {
  INTRODUCCION: [
    {
      parent: "Introducción",
      id: uuid(),
      section: API_SECTIONS.INTRODUCCION,
      subElement: Indications(),
    },
    {
      parent: "Indicaciones",
      id: uuid(),
      section: API_SECTIONS.INTRODUCCION,
      subElement: Indications(),
    },
    {
      parent: "Autorizacion",
      id: uuid(),
      section: API_SECTIONS.INTRODUCCION,
      subElement: Autorization(),
    },
    {
      parent: "About Querys",
      id: uuid(),
      section: API_SECTIONS.INTRODUCCION,
      subElement: AboutQuerys(),
    },
  ],
  TOOL: [
    {
      parent: "Primer Ejemplo",
      id: uuid(),
      section: API_SECTIONS.TOOL,
      subElement: FirstExample(),
    },
  ],
};
