import { useEffect, ReactElement, useContext, Dispatch } from "react";
import { createContext, useReducer, useState } from "react";
import { CreateIntialData } from "../../containers/Home/helpers/CreateData";
import {
  CONFIG_ACTIONS,
  DATASETS_ACTIONS,
} from "../../containers/Home/helpers/reducer/ACTION_TYPES";
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
import { Dataset } from "../interfaces/datasets.interface";
import { AppConfigContext } from "./AppConfigContext";
import { v4 as uuid } from "uuid";

interface DatasetContext {
  datasets: Dataset[];
  config: ConfigSchema;
  datasetDispatch: Dispatch<DatasetPayload>;
  configDispatch: Dispatch<ConfigPayload>;
  selectedDataset: Dataset;
  handleSelectDataset: (id: string) => void;
  handleNextDat: () => void;
  handlePrevDat: () => void;
}

const DatasetsContext = createContext<DatasetContext>({
  datasets: [],
  config: {} as any,
  datasetDispatch: (() => {}) as any,
  configDispatch: (() => {}) as any,
  selectedDataset: null!,
  handleSelectDataset: () => {},
  handleNextDat: () => {},
  handlePrevDat: () => {},
});

const DatasetsProvider = ({ children }: { children: ReactElement }) => {
  const { initialFetchLoading, errorInitialFetch, schemas, fileConfig } =
    useContext(AppConfigContext);

  // created datasets
  const [datasets, datasetDispatch] = useReducer(datasetsReducer, []);

  // configuration of the file to export
  const [config, configDispatch] = useReducer(configReducer, {
    file: { fileType: FILE_TYPE.JSON, arguments: {} },
    saveSchema: false,
  });

  // select dataset
  const [selectedDataset, setSelectedDataset] = useState<Dataset>(datasets[0]);

  useEffect(() => {
    if (!initialFetchLoading && !errorInitialFetch) {
      datasetDispatch({
        type: DATASETS_ACTIONS.SET_INIT_DATASETS,
        payload: {
          datasets: [
            { id: uuid(), fields: [], limit: 50, name: "New Dataset" },
          ],
        },
      });
      /*const initDataset = [
        new CreateIntialData(schemas).createDefaultDataset(0, true),
      ];

      datasetDispatch({
        type: DATASETS_ACTIONS.SET_INIT_DATASETS,
        payload: { datasets: initDataset },
      });
      setSelectedDataset(initDataset[0]);

      configDispatch({
        type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
        payload: {
          file: {
            fileType: fileConfig[0].fileType,
            arguments: {},
          },
          saveSchema: false,
        },
      });*/
    }
  }, [initialFetchLoading, errorInitialFetch, schemas, fileConfig]);

  useEffect(() => {
    setSelectedDataset((prev) => {
      if (prev) {
        return datasets.find((el) => el.id === prev.id)!;
      } else return datasets[0];
    });
  }, [datasets]);

  const handleSelectDataset = (id: string) => {
    setSelectedDataset(datasets.find((el) => el.id === id)!);
  };

  const handleNextDat = () => {
    if (selectedDataset) {
      const index = datasets.map((el) => el.id).indexOf(selectedDataset.id);

      if (index === datasets.length - 1) setSelectedDataset(datasets[0]);
      else setSelectedDataset(datasets[index + 1]);
    }
  };

  const handlePrevDat = () => {
    if (selectedDataset) {
      const index = datasets.map((el) => el.id).indexOf(selectedDataset.id);

      setSelectedDataset(datasets[index - 1] || datasets[0]);
    }
  };

  const data = {
    datasets,
    datasetDispatch,
    config,
    configDispatch,
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
