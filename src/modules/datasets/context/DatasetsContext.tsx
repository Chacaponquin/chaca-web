import { useEffect, Dispatch, Reducer, createContext, useReducer, useState } from "react"
import { DatasetPayload, datasetsReducer } from "../reducer/datasets"
import { Dataset, Field, SaveDatasets } from "@modules/datasets/domain/core"
import { useSchemas } from "@modules/schemas/hooks"
import { useLocalStorage } from "@modules/app/hooks"
import { STORAGE_KEYS } from "@modules/app/constants"
import { InitLoadValidator } from "../domain/validators/init-load"
import { ISaveDatasets, LoadDataset, SaveDataset } from "../domain/core/save"
import { DATASETS_ACTIONS } from "../domain/constants"
import { DEFAULT_VERSION } from "@modules/schemas/domain/constants"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { usePlayground } from "@modules/playground/hooks"
import { DatasetNodeBuilder } from "@modules/playground/domain"
import { SchemaSearcher } from "@modules/schemas/domain/core/search"

interface Props {
  datasets: Dataset[]
  datasetDispatch: Dispatch<DatasetPayload>
  selectedDataset: Dataset | null
  handleSelectDataset(id: string | null): void
  handleOpenFieldsMenu(): void
  handleCloseFieldsMenu(): void
  showFieldsMenu: boolean
  handleClearDatasets(): void
}

export const DatasetsContext = createContext<Props>({
  datasets: [] as Dataset[],
  showFieldsMenu: false,
} as Props)

export function DatasetsProvider({ children }: { children: React.ReactNode }) {
  const { fetch: fetchSchemas, schemas, version } = useSchemas()
  const { set: setStorage, get: getStorage, remove: removeStorage } = useLocalStorage()
  const { toastError } = useToast()
  const { LOAD_DATASETS_ERROR } = useTranslation({
    LOAD_DATASETS_ERROR: {
      en: "There was an error loading the datasets",
      es: "Hubo un error cargando los datasets",
    },
  })
  const { nodes, handleSetNodes, updateConnections, handleCleanEdges, handleCleanNodes } =
    usePlayground()

  const [showFieldsMenu, setShowFieldsMenu] = useState(false)

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

  useEffect(() => {
    const read = getStorage(STORAGE_KEYS.PREVIEW_CONFIG)

    if (read) {
      const content = JSON.parse(read) as ISaveDatasets
      const validator = new InitLoadValidator({ content: content })

      validator.execute({
        success() {
          fetchSchemas({
            version: content.version,
            success(schemas) {
              const result = [] as LoadDataset[]

              content.datasets.forEach((save) => {
                const newDataset = new Dataset({ limit: save.limit, name: save.name, id: save.id })
                const searcher = new SchemaSearcher(schemas)

                save.fields.forEach((f) => {
                  const field = Field.createFromSave({
                    props: f,
                    searcher: searcher,
                  })

                  newDataset.insertField(field)
                })

                result.push({ dataset: newDataset, posX: save.posX, posY: save.posY })
              })

              const saveDatasets = result.map((r) => r.dataset)
              const saveNodes = result.map((r) => {
                return DatasetNodeBuilder.build({ dataset: r.dataset, posX: r.posX, posY: r.posY })
              })

              handleSetDatasets(saveDatasets)
              handleSetNodes(saveNodes)

              updateConnections(saveDatasets)

              if (saveDatasets.length > 0) {
                setSelectedDataset(saveDatasets[0])
              }
            },
          })
        },
        error() {
          fetchSchemas({
            version: DEFAULT_VERSION,
            success() {
              handleClearDatasets()
              toastError({ id: "load-datasets-error", message: LOAD_DATASETS_ERROR })
            },
          })
        },
      })
    } else {
      fetchSchemas({
        version: DEFAULT_VERSION,
        success() {
          handleClearDatasets()
        },
      })
    }
  }, [])

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
            fields: d.saveFields(),
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
  }, [datasets, schemas, nodes])

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

  function handleOpenFieldsMenu() {
    setShowFieldsMenu(true)
  }

  function handleClearDatasets() {
    datasetDispatch({ type: DATASETS_ACTIONS.CLEAR })

    handleCleanEdges()
    handleCleanNodes()

    removeStorage(STORAGE_KEYS.PREVIEW_CONFIG)
  }

  function handleCloseFieldsMenu() {
    setShowFieldsMenu(false)
  }

  const data: Props = {
    datasets,
    datasetDispatch,
    selectedDataset,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
    handleClearDatasets,
  }

  return <DatasetsContext.Provider value={data}>{children}</DatasetsContext.Provider>
}
