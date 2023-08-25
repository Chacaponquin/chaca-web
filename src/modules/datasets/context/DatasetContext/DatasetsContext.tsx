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
import { ConfigPayload, configReducer } from "@modules/config/reducer/config_reducer"
import { DatasetPayload, datasetsReducer } from "../../reducer/datasetsReducer"
import { FILE_TYPE } from "@modules/config/constants"
import { ConfigSchema } from "@modules/config/interfaces/config.iterface"
import { AppContext } from "@modules/app/context"
import { Dataset, FieldNode } from "@modules/datasets/domain/tree"
import { useDatasetServices } from "@modules/datasets/services"
import { DATASETS_ACTIONS } from "@modules/datasets/constants"

interface DatasetContextProps {
  datasets: Dataset[]
  config: ConfigSchema
  datasetDispatch: Dispatch<DatasetPayload>
  configDispatch: Dispatch<ConfigPayload>
  selectedDataset: Dataset
  selectField: FieldNode | null
  handleSelectDataset: (id: string) => void
  handleSelectField: (datasetID: string, fieldID: string) => void
  handleDeleteSelectField: () => void
  handleOpenFieldsMenu: () => void
  handleCloseFieldsMenu: () => void
  showFieldsMenu: boolean
}

const DatasetsContext = createContext<DatasetContextProps>({} as DatasetContextProps)

const DatasetsProvider = ({ children }: { children: ReactElement }) => {
  const [showFieldsMenu, setShowFieldsMenu] = useState(false)
  const { initialFetchLoading, fileConfig } = useContext(AppContext)
  const { initDatasets } = useDatasetServices()

  // created datasets
  const [datasets, datasetDispatch] = useReducer<Reducer<Dataset[], DatasetPayload>>(
    datasetsReducer,
    [],
  )

  // configuration of the file to export
  const [config, configDispatch] = useReducer(configReducer, {
    file: { fileType: FILE_TYPE.JSON, arguments: {} },
    saveSchema: null,
  })

  // select dataset
  const [selectedDataset, setSelectedDataset] = useState<Dataset>(datasets[0])

  // select field
  const [selectField, setSelectField] = useState<FieldNode | null>(null)

  useEffect(() => {
    if (!initialFetchLoading) {
      const initialDatasets = initDatasets()

      datasetDispatch({
        type: DATASETS_ACTIONS.SET_INIT_DATASETS,
        payload: { datasets: initialDatasets },
      })

      setSelectedDataset(initialDatasets[0])
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
      const foundNode = foundDataset.findFieldByID(fieldID)
      setSelectField(foundNode)
    }
  }

  const handleDeleteSelectField = () => {
    setSelectField(null)
  }

  const handleOpenFieldsMenu = () => {
    setShowFieldsMenu(true)
  }

  const handleCloseFieldsMenu = () => {
    setShowFieldsMenu(false)
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
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}

export { DatasetsContext, DatasetsProvider }
