import {
  useEffect,
  ReactElement,
  Dispatch,
  Reducer,
  createContext,
  useReducer,
  useState,
} from "react"
import { DatasetPayload, datasetsReducer } from "../../reducer/datasets_reducer"
import { Dataset } from "@modules/datasets/domain/tree"
import { useDatasetServices } from "@modules/datasets/services"
import { DATASETS_ACTIONS } from "@modules/datasets/constants"
import { useConfigServices } from "@modules/config/services"

interface DatasetContextProps {
  datasets: Dataset[]
  datasetDispatch: Dispatch<DatasetPayload>
  selectedDataset: Dataset | null
  handleSelectDataset: (id: string) => void
  handleOpenFieldsMenu: () => void
  handleCloseFieldsMenu: () => void
  showFieldsMenu: boolean
}

const DatasetsContext = createContext<DatasetContextProps>({} as DatasetContextProps)

const DatasetsProvider = ({ children }: { children: ReactElement }) => {
  const [showFieldsMenu, setShowFieldsMenu] = useState(false)
  const { initDatasets } = useDatasetServices()
  const { fileConfig } = useConfigServices()

  // created datasets
  const [datasets, datasetDispatch] = useReducer<Reducer<Dataset[], DatasetPayload>>(
    datasetsReducer,
    [],
  )

  // select dataset
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null)

  useEffect(() => {
    const initialDatasets = initDatasets()

    datasetDispatch({
      type: DATASETS_ACTIONS.SET_INIT_DATASETS,
      payload: { datasets: initialDatasets },
    })

    setSelectedDataset(initialDatasets[0])
  }, [fileConfig])

  const handleSelectDataset = (id: string) => {
    const findDataset = datasets.find((el) => el.id === id)

    if (findDataset) {
      setSelectedDataset(findDataset)
    }
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
    selectedDataset,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}

export { DatasetsContext, DatasetsProvider }
