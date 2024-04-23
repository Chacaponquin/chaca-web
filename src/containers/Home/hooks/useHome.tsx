import { useEffect, useState } from "react"
import { DATASETS_ERROR_HTTP_STATUS, SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useSocket } from "@modules/app/modules/socket/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { Dataset, ExportDataset } from "@modules/datasets/domain/tree"
import { useSchemas } from "@modules/schemas/hooks"
import {
  EmptyEnumFieldError,
  EmptyRefFieldError,
  EmptySequentialFieldError,
} from "@modules/datasets/errors"
import { useDatasetServices } from "@modules/datasets/services"
import { ExportDatasetDTO, RespExportDatasetDTO } from "@modules/datasets/dto/dataset"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { Config } from "@modules/config/interfaces"
import { DatasetCreationError } from "@modules/app/modules/socket/domain/error"
import { useHomeTranslations } from "."

export default function useHome() {
  const [createDataLoading, setCreateDataLoading] = useState(false)

  const {
    datasets,
    selectedDataset,
    handleAddDataset: handleAddDatasetService,
    searchRefField,
    showFieldsMenu,
  } = useDatasets()
  const { handleOpenModal } = useModal()
  const { toastError } = useToast()
  const { language } = useLanguage()
  const { socket } = useSocket()
  const { findParent, findType } = useSchemas()
  const { exportDatasets: exportDatasetsService, downloadDatasetFile } = useDatasetServices()
  const {
    ERROR_MESSAGES: { CREATION_ERROR, EMPTY_REF_FIELD_ERROR, NETWORK_ERROR },
    FUNCTION_ERROR_MESSAGES: {
      EMPTY_ENUM_FIELD,
      EMPTY_SEQUENTIAL_FIELD,
      CYCLIC_DATA,
      NOT_ENOUGH_VALUES_FOR_REF,
      NOT_EXIST_FIELD,
      TRY_REF_A_NOT_KEY_FIELD,
    },
  } = useHomeTranslations()

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_FILE_URL, handleFinishCreation)
    socket.on(SOCKET_EVENTS.CREATION_ERROR, handleErrorCreation)

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.CREATE_DATASETS)
    }
  }, [socket, language, handleFinishCreation, handleErrorCreation])

  async function handleFinishCreation(props: RespExportDatasetDTO) {
    try {
      await downloadDatasetFile({ id: props.id, filename: props.filename })
    } catch (error) {
      toastError({ message: CREATION_ERROR, id: "dataset-creation-error" })
    } finally {
      setCreateDataLoading(false)
    }
  }

  function handleErrorCreation(error: DatasetCreationError) {
    if (error.code === DATASETS_ERROR_HTTP_STATUS.CYCLIC) {
      toastError({ message: CYCLIC_DATA(), id: "cyclic-data-error" })
    } else if (error.code === DATASETS_ERROR_HTTP_STATUS.EMPTY_SEQUENTIAL) {
      toastError({
        message: EMPTY_SEQUENTIAL_FIELD({ field: error.content.field }),
        id: "empty-sequential-field-error",
      })
    } else if (error.code === DATASETS_ERROR_HTTP_STATUS.NOT_ENOUGH_VALUES_REF) {
      toastError({
        message: NOT_ENOUGH_VALUES_FOR_REF(error.content),
        id: "not-enought-values-for-ref-error",
      })
    } else if (error.code === DATASETS_ERROR_HTTP_STATUS.DEFAULT) {
      toastError({ message: CREATION_ERROR, id: "dataset-creation-error" })
    } else if (error.code === DATASETS_ERROR_HTTP_STATUS.NOT_EXIST_FIELD) {
      toastError({ message: NOT_EXIST_FIELD(error.content), id: "not-exist-field-error" })
    } else if (error.code === DATASETS_ERROR_HTTP_STATUS.REF_NOT_KEY) {
      toastError({
        message: TRY_REF_A_NOT_KEY_FIELD(error.content),
        id: "try-ref-a-not-key-field-error",
      })
    } else {
      toastError({ message: CREATION_ERROR, id: "dataset-creation-error" })
    }

    setCreateDataLoading(false)
  }

  function exportDatasets(inputDatasets: Dataset[], config: Config): void {
    try {
      setCreateDataLoading(true)

      const exportDatasets: ExportDataset[] = inputDatasets.map((dat) =>
        dat.exportObject({
          findOption: findType,
          findParent: findParent,
          searchRefField: searchRefField,
          fieldRoute: [],
        }),
      )

      const datasetsDTO: ExportDatasetDTO[] = exportDatasets.map((d) => ({
        name: d.name,
        limit: d.limit,
        fields: d.fields,
      }))

      exportDatasetsService({
        datasets: datasetsDTO,
        config: {
          type: config.file.type,
          arguments: config.file.arguments,
          name: config.file.name,
        },
      })
    } catch (error) {
      if (error instanceof EmptyRefFieldError) {
        toastError({ message: EMPTY_REF_FIELD_ERROR })
      } else if (error instanceof EmptyEnumFieldError) {
        toastError(EMPTY_ENUM_FIELD({ field: error.field }))
      } else if (error instanceof EmptySequentialFieldError) {
        toastError(EMPTY_SEQUENTIAL_FIELD({ field: error.field }))
      } else if (error instanceof ConnectSockerError) {
        toastError({ message: NETWORK_ERROR })
      }

      setCreateDataLoading(false)
    }
  }

  function handleCreateAllDatasets() {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_ALL_DATASETS,
      handleCreateAllDatasets({ config }) {
        exportDatasets(datasets, config)
      },
    })
  }

  function handleCreateDataset(dataset: Dataset): void {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
      handleCreateSelectDataset({ config }) {
        exportDatasets([dataset], config)
      },
    })
  }

  function handleExportSelectedDataset() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
        handleCreateSelectDataset({ config }) {
          exportDatasets([selectedDataset], config)
        },
      })
    }
  }

  function handleAddNewField() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.ADD_FIELD,
        parentfieldId: selectedDataset.id,
        datasetId: selectedDataset.id,
      })
    }
  }

  function handleAddDataset() {
    handleAddDatasetService({ handleCreateDataset: handleCreateDataset })
  }

  return {
    handleExportSelectedDataset,
    handleCreateAllDatasets,
    createDataLoading,
    handleAddNewField,
    handleAddDataset,
    datasets,
    showFieldsMenu,
    handleCreateDataset,
  }
}
