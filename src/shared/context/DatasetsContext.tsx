import { useEffect, ReactElement, useContext, Dispatch, Reducer } from "react";
import { createContext, useReducer, useState } from "react";
import {
  CONFIG_ACTIONS,
  DATASETS_ACTIONS,
} from "../../containers/Home/constants/ACTION_TYPES";
import {
  ConfigPayload,
  configReducer,
} from "../../containers/Home/helpers/reducer/configReducer";
import {
  DatasetPayload,
  datasetsReducer,
} from "../../containers/Home/helpers/reducer/datasetsReducer";
import { FILE_TYPE } from "../constant/FILE_TYPE";
import { ConfigSchema } from "../interfaces/config.iterface";
import { AppConfigContext } from "./AppConfigContext";
import { DatasetTree, FieldNode } from "../helpers/DatasetTree";

interface DatasetContext {
  datasets: DatasetTree[];
  config: ConfigSchema;
  datasetDispatch: Dispatch<DatasetPayload>;
  configDispatch: Dispatch<ConfigPayload>;
  selectedDataset: DatasetTree;
  selectField: FieldNode | null;
  handleSelectDataset: (id: string) => void;
  handleSelectField: (datasetID: string, fieldID: string) => void;
  handleDeleteSelectField: () => void;
}

const DatasetsContext = createContext<DatasetContext>({
  datasets: [],
  config: {} as any,
  datasetDispatch: (() => {}) as any,
  configDispatch: (() => {}) as any,
  selectedDataset: null!,
  selectField: null,
  handleSelectDataset: () => {},
  handleSelectField: () => {},
  handleDeleteSelectField: () => {},
});

const DatasetsProvider = ({ children }: { children: ReactElement }) => {
  const { initialFetchLoading, errorInitialFetch, fileConfig } =
    useContext(AppConfigContext);

  // created datasets
  const [datasets, datasetDispatch] = useReducer<
    Reducer<DatasetTree[], DatasetPayload>
  >(datasetsReducer, []);

  // configuration of the file to export
  const [config, configDispatch] = useReducer(configReducer, {
    file: { fileType: FILE_TYPE.JSON, arguments: {} },
    saveSchema: false,
  });

  // select dataset
  const [selectedDataset, setSelectedDataset] = useState<DatasetTree>(
    datasets[0]
  );

  const [selectField, setSelectField] = useState<FieldNode | null>(null);

  useEffect(() => {
    if (!initialFetchLoading && !errorInitialFetch) {
      const initDataset = new DatasetTree("New Dataset", 50);

      datasetDispatch({
        type: DATASETS_ACTIONS.SET_INIT_DATASETS,
        payload: {
          datasets: [initDataset],
        },
      });

      setSelectedDataset(initDataset);

      configDispatch({
        type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
        payload: {
          file: {
            fileType: fileConfig[0].fileType,
            arguments: {},
          },
          saveSchema: false,
        },
      });
    }
  }, [initialFetchLoading, errorInitialFetch, fileConfig]);

  const handleSelectDataset = (id: string) => {
    setSelectedDataset(datasets.find((el) => el.id === id)!);
    setSelectField(null);
  };

  const handleSelectField = (datasetID: string, fieldID: string) => {
    const foundDataset = datasets.find((el) => el.id === datasetID)!;
    setSelectField(foundDataset.findFieldByID(fieldID));
  };

  const handleDeleteSelectField = () => {
    setSelectField(null);
  };

  const data = {
    datasets,
    datasetDispatch,
    config,
    configDispatch,
    selectedDataset,
    selectField,
    handleSelectDataset,
    handleSelectField,
    handleDeleteSelectField,
  };

  return (
    <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
  );
};

export { DatasetsContext };
export default DatasetsProvider;
