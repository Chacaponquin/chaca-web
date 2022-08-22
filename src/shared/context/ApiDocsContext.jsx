import { useState } from "react";
import { createContext } from "react";
import { initialDataMap } from "../../containers/Api/helpers/dataMap";
import { API_SECTIONS } from "../../containers/Api/helpers/SECTIONS";
import { SECTIONS_CONTENT } from "../helpers/apiSectionsContent";
import { useQuery } from "../hooks/useQuery";
import { apiRoutes } from "../routes/api/apiRoutes";

const ApiDocsContext = createContext({
  apiFields: [],
  loading: true,
  subSectionSelect: null,
  handleChangeSubSection: () => {},
});

const ApiDocsProvider = ({ children }) => {
  const [apiFields, setApiFields] = useState([]);
  const [subSectionSelect, setSubSectionSelect] = useState(null);

  const handleChangeSubSection = (sub) => {
    setSubSectionSelect(sub);
  };

  const { loading } = useQuery({
    url: apiRoutes.GET_API_OPTIONS,
    onCompleted: (data) => {
      setApiFields(initialDataMap(data.options));
      setSubSectionSelect({
        section: API_SECTIONS.INTRODUCCION,
        subElement: SECTIONS_CONTENT.INTRODUCCION[0],
      });
    },
    onError: (error) => console.error(error),
  });

  const data = {
    apiFields,
    loading,
    subSectionSelect,
    handleChangeSubSection,
  };

  return (
    <ApiDocsContext.Provider value={data}>{children}</ApiDocsContext.Provider>
  );
};

export default ApiDocsProvider;
export { ApiDocsContext };
