import { createContext, useReducer, useState } from "react";
import { configReducer } from "../../containers/Home/helpers/reducer/configReducer";
import { createInitialDataset } from "../../containers/Home/helpers/reducer/createInitialFunctions";
import { datasetsReducer } from "../../containers/Home/helpers/reducer/datasetsReducer";
import { useQuery } from "../hooks/useQuery";
import { apiRoutes } from "../routes/api/apiRoutes";

const DatasetsContext = createContext({
  datasets: [],
  config: {},
  noUserLimits: {},
  dispatch: () => {},
  configDispatch: () => {},
});

const DatasetsProvider = ({ children }) => {
  const [datasets, dispatch] = useReducer(datasetsReducer, [
    createInitialDataset(0),
  ]);

  const [config, configDispatch] = useReducer(configReducer, {
    fileType: null,
  });

  const [noUserLimits, setNoUserLimits] = useState({});

  useQuery({
    url: apiRoutes.GET_NO_USER_LIMITS,
    onCompleted: (data) => setNoUserLimits(data.limits),
    onError: () => {},
  });

  const data = {
    datasets,
    dispatch,
    config,
    configDispatch,
    noUserLimits,
  };

  return (
    <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
  );
};

export { DatasetsContext };
export default DatasetsProvider;
