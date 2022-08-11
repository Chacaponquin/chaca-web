import { createContext, useReducer } from "react";
import { configReducer } from "../../containers/Home/helpers/reducer/configReducer";
import { createInitialDataset } from "../../containers/Home/helpers/reducer/createInitialFunctions";
import { datasetsReducer } from "../../containers/Home/helpers/reducer/datasetsReducer";

const DatasetsContext = createContext({
  datasets: [],
  dispatch: () => {},
  config: {},
  configDispatch: () => {},
});

const DatasetsProvider = ({ children }) => {
  const [datasets, dispatch] = useReducer(datasetsReducer, [
    createInitialDataset(0),
  ]);

  const [config, configDispatch] = useReducer(configReducer, {
    fileType: null,
  });

  const data = {
    datasets,
    dispatch,
    config,
    configDispatch,
  };

  return (
    <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
  );
};

export { DatasetsContext };
export default DatasetsProvider;
