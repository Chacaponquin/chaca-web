import { useEffect, Dispatch, Reducer, createContext, useReducer, useState } from "react"
import { DatasetPayload, datasetReducer } from "../reducer/dataset"
import { InitLoadValidator } from "../domain/validators/init-load"
import { DATASET_ACTIONS } from "../domain/constants"
import { DEFAULT_VERSION } from "@modules/modules/domain/constants"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { usePlayground } from "@modules/playground/hooks"
import { DatasetNodeBuilder } from "@modules/playground/domain"
import { SchemaSearcher } from "@modules/modules/domain/core/search"
import { ISaveDataset, LoadDataset, SaveDataset, SaveSchema } from "../domain/core/save"
import { Schema } from "../domain/core/schema"
import { Field } from "../domain/core/field"
import useModules from "@modules/modules/hooks/useModules"
import { LocalStorage } from "@modules/app/services/local-storage"
import { STORAGE_KEYS } from "@modules/app/constants/storage-keys"

interface Props {
  dataset: Schema[]
  datasetDispatch: Dispatch<DatasetPayload>
  selectedSchema: Schema | null
  handleSelectDataset(id: string | null): void
  handleOpenFieldsMenu(): void
  handleCloseFieldsMenu(): void
  showFieldsMenu: boolean
  handleClearDataset(): void
}

export const DatasetContext = createContext<Props>({
  dataset: [] as Schema[],
  showFieldsMenu: false,
} as Props)

export function DatasetProvider({ children }: { children: React.ReactNode }) {
  const { fetch: fetchModules, modules, version } = useModules()
  const { toastError } = useToast()
  const { LOAD_DATASETS_ERROR } = useTranslation({
    LOAD_DATASETS_ERROR: {
      en: "There was an error loading the dataset",
      es: "Hubo un error cargando los dataset",
    },
  })
  const { nodes, handleSetNodes, updateConnections, handleCleanEdges, handleCleanNodes } =
    usePlayground()

  const [showFieldsMenu, setShowFieldsMenu] = useState(false)

  const [selectedSchema, setSelectedSchema] = useState<Schema | null>(null)
  const [dataset, datasetDispatch] = useReducer<Reducer<Schema[], DatasetPayload>>(
    datasetReducer,
    [],
  )

  useEffect(() => {
    if (dataset.length === 1) {
      handleSelectDataset(dataset[0].id)
    }
  }, [dataset])

  useEffect(() => {
    const read = LocalStorage.get(STORAGE_KEYS.PREVIEW_CONFIG)

    if (read) {
      const content = JSON.parse(read) as ISaveDataset
      const validator = new InitLoadValidator({ content: content })

      validator.execute({
        success() {
          fetchModules({
            version: content.version,
            success(modules) {
              const result = [] as LoadDataset[]

              content.schemas.forEach((save) => {
                const newSchema = new Schema({ limit: save.limit, name: save.name, id: save.id })
                const searcher = new SchemaSearcher(modules)

                save.fields.forEach((f) => {
                  const field = Field.createFromSave({
                    props: f,
                    searcher: searcher,
                  })

                  newSchema.insertField(field)
                })

                result.push({ schema: newSchema, posX: save.posX, posY: save.posY })
              })

              const saveDataset = result.map((r) => r.schema)
              const saveNodes = result.map((r) => {
                return DatasetNodeBuilder.build({ schema: r.schema, posX: r.posX, posY: r.posY })
              })

              handleSetSchemas(saveDataset)
              handleSetNodes(saveNodes)

              updateConnections(saveDataset)

              if (saveDataset.length > 0) {
                setSelectedSchema(saveDataset[0])
              }
            },
          })
        },
        error() {
          fetchModules({
            version: DEFAULT_VERSION,
            success() {
              handleClearDataset()
              toastError({ id: "load-dataset-error", message: LOAD_DATASETS_ERROR })
            },
          })
        },
      })
    } else {
      fetchModules({
        version: DEFAULT_VERSION,
        success() {
          handleClearDataset()
        },
      })
    }
  }, [])

  useEffect(() => {
    if (dataset.length > 0 && modules.length > 0) {
      const saveDataset = [] as SaveSchema[]

      for (const d of dataset) {
        const foundNode = nodes.find((n) => n.id === d.id)

        if (foundNode) {
          saveDataset.push({
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
      const save = new SaveDataset({
        version: version,
        schemas: saveDataset,
      })

      LocalStorage.set(STORAGE_KEYS.PREVIEW_CONFIG, save.json())
    }
  }, [dataset, modules, nodes])

  function handleSelectDataset(id: string | null) {
    const findDataset = dataset.find((el) => el.id === id)

    if (findDataset) {
      setSelectedSchema(findDataset)
    } else {
      setSelectedSchema(null)
    }
  }

  function handleSetSchemas(array: Schema[]) {
    datasetDispatch({ type: DATASET_ACTIONS.SET_INIT_DATASET, payload: { dataset: array } })
  }

  function handleOpenFieldsMenu() {
    setShowFieldsMenu(true)
  }

  function handleClearDataset() {
    datasetDispatch({ type: DATASET_ACTIONS.CLEAR })

    handleCleanEdges()
    handleCleanNodes()

    LocalStorage.remove(STORAGE_KEYS.PREVIEW_CONFIG)
  }

  function handleCloseFieldsMenu() {
    setShowFieldsMenu(false)
  }

  const data: Props = {
    dataset,
    datasetDispatch,
    selectedSchema,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
    handleClearDataset,
  }

  return <DatasetContext.Provider value={data}>{children}</DatasetContext.Provider>
}
