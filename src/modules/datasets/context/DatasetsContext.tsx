/*eslint-disable */

import {
  useEffect,
  ReactElement,
  useContext,
  Dispatch,
  Reducer,
  createContext,
  useReducer,
  useState,
} from "react"
import { DATASETS_ACTIONS } from "../constants"
import { ConfigPayload, configReducer } from "@modules/config/reducer/configReducer"
import { DatasetPayload, datasetsReducer } from "./reducer/datasetsReducer"
import { FILE_TYPE } from "@modules/config/constants"
import { ConfigSchema } from "@modules/config/interfaces/config.iterface"
import { AppConfigContext } from "@modules/shared/context"
import { DatasetTree, FieldNode } from "@modules/shared/classes"
import { CONFIG_ACTIONS } from "@modules/config/constants"

interface DatasetContext {
  datasets: DatasetTree[]
  config: ConfigSchema
  datasetDispatch: Dispatch<DatasetPayload>
  configDispatch: Dispatch<ConfigPayload>
  selectedDataset: DatasetTree
  selectField: FieldNode | null
  handleSelectDataset: (id: string) => void
  handleSelectField: (datasetID: string, fieldID: string) => void
  handleDeleteSelectField: () => void
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
})

const DatasetsProvider = ({ children }: { children: ReactElement }) => {
  const { initialFetchLoading, fileConfig } = useContext(AppConfigContext)

  // created datasets
  const [datasets, datasetDispatch] = useReducer<Reducer<DatasetTree[], DatasetPayload>>(
    datasetsReducer,
    [],
  )

  // configuration of the file to export
  const [config, configDispatch] = useReducer(configReducer, {
    file: { fileType: FILE_TYPE.JSON, arguments: {} },
    saveSchema: null,
  })

  // select dataset
  const [selectedDataset, setSelectedDataset] = useState<DatasetTree>(datasets[0])

  // select field
  const [selectField, setSelectField] = useState<FieldNode | null>(null)

  useEffect(() => {
    if (!initialFetchLoading) {
      const initDataset = new DatasetTree("New Dataset", 50)

      datasetDispatch({
        type: DATASETS_ACTIONS.SET_INIT_DATASETS,
        payload: {
          datasets: [initDataset],
        },
      })

      setSelectedDataset(initDataset)

      configDispatch({
        type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
        payload: {
          fileConfig,
        },
      })
    }
  }, [initialFetchLoading, fileConfig])

  const handleSelectDataset = (id: string) => {
    const findDataset = datasets.find((el) => el.id === id)

    if (findDataset) {
      setSelectedDataset(findDataset)
      setSelectField(null)
    }
  }

  const handleSelectField = (datasetID: string, fieldID: string) => {
    const foundDataset = datasets.find((el) => el.id === datasetID)

    if (foundDataset) {
      setSelectField(foundDataset.findFieldByID(fieldID))
    }
  }

  const handleDeleteSelectField = () => {
    setSelectField(null)
  }

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
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}

export { DatasetsContext, DatasetsProvider }
