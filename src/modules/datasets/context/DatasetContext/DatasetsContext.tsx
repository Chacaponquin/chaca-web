import {
  useEffect,
  ReactElement,
  Dispatch,
  Reducer,
  createContext,
  useReducer,
  useState,
  useCallback,
} from "react"
import { DatasetPayload, datasetsReducer } from "../../reducer/datasets-reducer"
import { Dataset } from "@modules/datasets/domain/tree"
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow"
import { CardProps } from "@containers/Home/components/DatasetPlayground/components"

interface Props {
  datasets: Dataset[]
  datasetDispatch: Dispatch<DatasetPayload>
  selectedDataset: Dataset | null
  handleSelectDataset(id: string | null): void
  handleOpenFieldsMenu(): void
  handleCloseFieldsMenu(): void
  showFieldsMenu: boolean
  nodes: Node<CardProps>[]
  edges: Edge[]
  onNodesChange(changes: NodeChange[]): void
  onEdgesChange(changes: Array<EdgeChange>): void
  onConnect(param: Connection): void
  handleAddEdge(edge: Edge): void
  handleDeleteNode(id: string): void
  handleChangeNodes(fun: (prev: Node<CardProps>[]) => Node<CardProps>[]): void
  handleChangeEdges(func: (edges: Edge[]) => Edge[]): void
  handleCleanEdges(): void
}

export const DatasetsContext = createContext<Props>({
  datasets: [] as Dataset[],
  showFieldsMenu: false,
} as Props)

export function DatasetsProvider({ children }: { children: ReactElement }) {
  const [showFieldsMenu, setShowFieldsMenu] = useState(false)

  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null)
  const [datasets, datasetDispatch] = useReducer<Reducer<Dataset[], DatasetPayload>>(
    datasetsReducer,
    [],
  )

  const [nodes, setNodes, onNodesChange] = useNodesState<CardProps>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

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

  function handleChangeEdges(func: (edges: Edge[]) => Edge[]) {
    setEdges(func)
  }

  function handleOpenFieldsMenu() {
    setShowFieldsMenu(true)
  }

  function handleCloseFieldsMenu() {
    setShowFieldsMenu(false)
  }

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds))
    },
    [setEdges],
  )

  function handleChangeNodes(fun: (prev: Node<CardProps>[]) => Node<CardProps>[]) {
    setNodes(fun)
  }

  function handleCleanEdges() {
    setEdges([])
  }

  function handleDeleteNode(id: string) {
    setNodes((prev) => prev.filter((n) => n.id !== id))
  }

  function handleAddEdge(edge: Edge) {
    setEdges((prev) => {
      const result = [...prev, edge]
      return result
    })
  }

  const data = {
    datasets,
    datasetDispatch,
    selectedDataset,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
    handleChangeNodes,
    nodes: nodes,
    edges: edges,
    onEdgesChange: onEdgesChange,
    onNodesChange: onNodesChange,
    onConnect: onConnect,
    handleAddEdge: handleAddEdge,
    handleDeleteNode: handleDeleteNode,
    handleChangeEdges,
    handleCleanEdges,
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}
