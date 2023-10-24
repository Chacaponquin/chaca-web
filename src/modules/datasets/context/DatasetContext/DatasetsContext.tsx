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
import { useDatasets } from "@modules/datasets/hooks"
import { DATASETS_ACTIONS } from "@modules/datasets/constants"
import { useConfigServices } from "@modules/config/services"

interface DatasetContextProps {
  datasets: Dataset[]
  datasetDispatch: Dispatch<DatasetPayload>
  selectedDataset: Dataset | null
  handleSelectDataset: (id: string | null) => void
  handleOpenFieldsMenu: () => void
  handleCloseFieldsMenu: () => void
  showFieldsMenu: boolean
}

const DatasetsContext = createContext<DatasetContextProps>({} as DatasetContextProps)

const DatasetsProvider = ({ children }: { children: ReactElement }) => {
  const [showFieldsMenu, setShowFieldsMenu] = useState(false)
  const { initDatasets } = useDatasets()
  const { fileConfig } = useConfigServices()

  // created datasets
  const [datasets, datasetDispatch] = useReducer<Reducer<Dataset[], DatasetPayload>>(
    datasetsReducer,
    [],
  )

  // select dataset
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null)

  useEffect(() => {
    if (datasets.length === 1) {
      handleSelectDataset(datasets[0].id)
    }
  }, [datasets])

  useEffect(() => {
    const initialDatasets = initDatasets()

    datasetDispatch({
      type: DATASETS_ACTIONS.SET_INIT_DATASETS,
      payload: { datasets: initialDatasets },
    })
  }, [fileConfig])

  const handleSelectDataset = (id: string | null) => {
    const findDataset = datasets.find((el) => el.id === id)

    if (findDataset) {
      setSelectedDataset(findDataset)
    } else {
      setSelectedDataset(null)
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
