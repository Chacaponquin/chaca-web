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
  nodes: Array<Node<CardProps>>
  edges: Array<Edge>
  onNodesChange(changes: Array<NodeChange>): void
  onEdgesChange(changes: Array<EdgeChange>): void
  onConnect(param: Connection): void
  handleAddNode(node: Node<CardProps>): void
  handleAddEdge(edge: Edge): void
  handleCleanEdges(): void
  handleDeleteNode(id: string): void
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

  function handleAddNode(node: Node<CardProps>) {
    setNodes((prev) => {
      const result = [...prev, node]
      return result
    })
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

  function handleCleanEdges(): void {
    setEdges([])
  }

  const data = {
    datasets,
    datasetDispatch,
    selectedDataset,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,

    nodes: nodes,
    edges: edges,
    onEdgesChange: onEdgesChange,
    onNodesChange: onNodesChange,
    onConnect: onConnect,
    handleAddEdge: handleAddEdge,
    handleAddNode: handleAddNode,
    handleCleanEdges: handleCleanEdges,
    handleDeleteNode: handleDeleteNode,
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}
