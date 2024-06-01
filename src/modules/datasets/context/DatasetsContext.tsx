import {
  useEffect,
  Dispatch,
  Reducer,
  createContext,
  useReducer,
  useState,
  useCallback,
} from "react"
import { DatasetPayload, datasetsReducer } from "../reducer/datasets-reducer"
import { Dataset, Field, SaveDatasets } from "@modules/datasets/domain/tree"
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
import { useSchemas } from "@modules/schemas/hooks"
import { useLocalStorage } from "@modules/app/hooks"
import { STORAGE_KEYS } from "@modules/app/constants"
import { InitLoadValidator } from "../domain/validators/init-load"
import { ISaveDatasets, LoadDataset, SaveDataset } from "../domain/tree/SaveDataset"
import { DATASETS_ACTIONS } from "../constants"
import { DEFAULT_VERSION } from "@modules/schemas/constants"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useTranslation } from "@modules/app/modules/language/hooks"

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
  handleChangeEdges(func: (edges: Edge[]) => Edge[]): void
  handleCleanEdges(): void
  handleAddDatasetNode(dataset: Dataset): void
  handleChangeNodes(fun: (prev: Node<CardProps>[]) => Node<CardProps>[]): void
}

interface CreateNodeProps {
  dataset: Dataset
  posX: number
  posY: number
}

export const DatasetsContext = createContext<Props>({
  datasets: [] as Dataset[],
  showFieldsMenu: false,
} as Props)

export function DatasetsProvider({ children }: { children: React.ReactNode }) {
  const { fetch: fetchSchemas, findParent, findType, schemas, version } = useSchemas()
  const { set: setStorage, get: getStorage } = useLocalStorage()
  const { toastError } = useToast()
  const { LOAD_DATASETS_ERROR } = useTranslation({
    LOAD_DATASETS_ERROR: {
      en: "There was an error loading the datasets",
      es: "Hubo un error cargando los datasets",
    },
  })

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

  useEffect(() => {
    if (datasets.length > 0 && schemas.length > 0) {
      const saveDatasets = [] as SaveDataset[]

      for (const d of datasets) {
        const foundNode = nodes.find((n) => n.id === d.id)

        if (foundNode) {
          saveDatasets.push({
            posX: foundNode.position.x,
            posY: foundNode.position.y,
            limit: d.limit,
            fields: d.saveFields({ findOption: findType, findParent: findParent }),
            name: d.name,
            id: d.id,
          })
        }
      }

      // save in localstorage
      const save = new SaveDatasets({
        version: version,
        datasets: saveDatasets,
      })

      setStorage(STORAGE_KEYS.PREVIEW_CONFIG, save.json())
    }
  }, [datasets, findType, findParent, nodes])

  useEffect(() => {
    const read = getStorage(STORAGE_KEYS.PREVIEW_CONFIG)

    if (read) {
      const content = JSON.parse(read) as ISaveDatasets
      const validator = new InitLoadValidator({ content: content })

      validator.execute({
        success() {
          const result = [] as LoadDataset[]

          content.datasets.forEach((save) => {
            const newDataset = new Dataset({ limit: save.limit, name: save.name, id: save.id })

            save.fields.forEach((saveField) => {
              const field = Field.create({
                dataType: saveField.dataType,
                name: saveField.name,
                isArray: saveField.isArray,
                isKey: saveField.isKey,
                isPossibleNull: saveField.isPossibleNull,
                id: saveField.id,
              })

              newDataset.insertField(field)
            })

            result.push({ dataset: newDataset, posX: save.posX, posY: save.posY })
          })

          fetchSchemas(content.version)
          handleSetDatasets(result.map((r) => r.dataset))
          handleSetNodes(
            result.map((r) => {
              return createNode({ dataset: r.dataset, posX: r.posX, posY: r.posY })
            }),
          )
        },
        error() {
          fetchSchemas(DEFAULT_VERSION)
          handleClearDatasets()
          toastError({ id: "load-datasets-error", message: LOAD_DATASETS_ERROR })
        },
      })
    } else {
      fetchSchemas(DEFAULT_VERSION)
      handleClearDatasets()
    }
  }, [])

  useEffect(() => {}, [schemas])

  function handleSelectDataset(id: string | null) {
    const findDataset = datasets.find((el) => el.id === id)

    if (findDataset) {
      setSelectedDataset(findDataset)
    } else {
      setSelectedDataset(null)
    }
  }

  function handleSetDatasets(array: Dataset[]) {
    datasetDispatch({ type: DATASETS_ACTIONS.SET_INIT_DATASETS, payload: { datasets: array } })
  }

  function handleSetNodes(array: Node<CardProps>[]): void {
    setNodes(array)
  }

  function handleChangeEdges(func: (edges: Edge[]) => Edge[]) {
    setEdges(func)
  }

  function handleOpenFieldsMenu() {
    setShowFieldsMenu(true)
  }

  function handleClearDatasets() {
    datasetDispatch({ type: DATASETS_ACTIONS.CLEAR })
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

  function handleAddDatasetNode(dataset: Dataset) {
    setNodes((prev) => {
      return [...prev, createNode({ dataset: dataset, posX: 100, posY: 200 })]
    })
  }

  function handleChangeNodes(fun: (prev: Node<CardProps>[]) => Node<CardProps>[]) {
    setNodes(fun)
  }

  function createNode({ dataset, posX, posY }: CreateNodeProps): Node<CardProps> {
    return {
      id: dataset.id,
      type: "custom",
      draggable: true,
      position: { x: posX, y: posY },
      data: { dataset: dataset },
    }
  }

  const data: Props = {
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
    handleDeleteNode: handleDeleteNode,
    handleChangeEdges,
    handleCleanEdges,
    handleAddDatasetNode,
    handleChangeNodes,
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}
