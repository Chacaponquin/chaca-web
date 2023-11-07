import {
  useEffect,
  ReactElement,
  Dispatch,
  Reducer,
  createContext,
  useReducer,
  useState,
} from "react"
import { DatasetPayload, datasetsReducer } from "../../reducer/datasets-reducer"
import { Dataset } from "@modules/datasets/domain/tree"

interface Props {
  datasets: Dataset[]
  datasetDispatch: Dispatch<DatasetPayload>
  selectedDataset: Dataset | null
  handleSelectDataset: (id: string | null) => void
  handleOpenFieldsMenu: () => void
  handleCloseFieldsMenu: () => void
  showFieldsMenu: boolean
}

const DatasetsContext = createContext<Props>({} as Props)

function DatasetsProvider({ children }: { children: ReactElement }) {
  const [showFieldsMenu, setShowFieldsMenu] = useState(true)

  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null)
  const [datasets, datasetDispatch] = useReducer<Reducer<Dataset[], DatasetPayload>>(
    datasetsReducer,
    [],
  )

  useEffect(() => {
    if (datasets.length === 1) {
      handleSelectDataset(datasets[0].id)
    }
  }, [datasets])

  function handleSelectDataset(id: string | null) {
    const findDataset = datasets.find((el) => el.id === id)

    if (findDataset) {
      setSelectedDataset(findDataset)
    } else {
      setSelectedDataset(null)
    }
  }

  function handleOpenFieldsMenu() {
    setShowFieldsMenu(true)
  }

  function handleCloseFieldsMenu() {
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
