import { useEffect } from "react";
import { createContext, useReducer, useState } from "react";
import { initialDataMap } from "../../containers/Home/helpers/dataMap";
import { CONFIG_ACTIONS } from "../../containers/Home/helpers/reducer/ActionTypes";
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
  fieldsOptions: [],
  getFieldsLoading: true,
  fileConfigOptions: [],
  selectedDataset: null,
  handleSelectDataset: () => {},
  handleNextDat: () => {},
  handlePrevDat: () => {},
});

const DatasetsProvider = ({ children }) => {
  const [datasets, dispatch] = useReducer(datasetsReducer, [
    createInitialDataset(0),
  ]);
  const [config, configDispatch] = useReducer(configReducer, {
    file: {},
    saveSchema: false,
  });
  const [selectedDataset, setSelectedDataset] = useState(datasets[0]);
  const [noUserLimits, setNoUserLimits] = useState({});
  const [fieldsOptions, setFieldsOptions] = useState([]);
  const [fileConfigOptions, setFileConfigOptions] = useState([]);

  const { loading: getFieldsLoading } = useQuery({
    url: apiRoutes.GET_FIELDS,
    onCompleted: (data) => {
      setFieldsOptions(initialDataMap(data.fields));
    },
    onError: (error) => console.log(error),
  });

  useQuery({
    url: apiRoutes.GET_NO_USER_LIMITS,
    onCompleted: (data) => setNoUserLimits(data.limits),
    onError: () => {},
  });

  useQuery({
    url: apiRoutes.GET_FILE_OPTIONS,
    onCompleted: (data) => {
      setFileConfigOptions(data.options);

      configDispatch({
        type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
        payload: {
          value: {
            file: {
              fileType: data.options[0].fileType,
              saveSchema: false,
            },
          },
        },
      });
    },
    onError: () => {},
  });

  useEffect(() => {
    setSelectedDataset((prev) => datasets.find((el) => el.id === prev.id));
  }, [datasets]);

  const handleSelectDataset = (id) => {
    setSelectedDataset(datasets.find((el) => el.id === id));
  };

  const handleNextDat = () => {
    const index = datasets.map((el) => el.id).indexOf(selectedDataset.id);

    if (index === datasets.length - 1) setSelectedDataset(datasets[0]);
    else setSelectedDataset(datasets[index + 1]);
  };

  const handlePrevDat = () => {
    const index = datasets.map((el) => el.id).indexOf(selectedDataset.id);

    if (index === datasets.length - 1) setSelectedDataset(datasets[0]);
    else setSelectedDataset(datasets[index - 1]);
  };

  const data = {
    datasets,
    dispatch,
    config,
    configDispatch,
    noUserLimits,
    fieldsOptions,
    getFieldsLoading,
    fileConfigOptions,
    selectedDataset,
    handleSelectDataset,
    handleNextDat,
    handlePrevDat,
  };

  return (
    <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
  );
};

export { DatasetsContext };
export default DatasetsProvider;
