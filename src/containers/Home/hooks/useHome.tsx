import { useEffect, useState } from "react"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { useConfig } from "@modules/config/hooks"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useLanguage, useLanguageContext } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useEnv } from "@modules/app/modules/env/hooks"
import { useSocket } from "@modules/app/modules/socket/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { Dataset, ExportDataset } from "@modules/datasets/domain/tree"
import { useSchemas } from "@modules/schemas/hooks"
import { EmptyRefFieldError } from "@modules/datasets/errors"
import { useDatasetServices } from "@modules/datasets/services"
import { ExportDatasetDTO } from "@modules/datasets/dto/dataset"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { API_ROUTES } from "@modules/app/constants/ROUTES"

export const useHome = () => {
  const {
    datasets,
    selectedDataset,
    handleAddDataset: handleAddDatasetService,
    searchRefField,
    showFieldsMenu,
  } = useDatasets()
  const { handleResetConfig, config } = useConfig()
  const { handleOpenModal } = useModal()
  const { toastError } = useToast()
  const { API_ROUTE } = useEnv()
  const { language } = useLanguageContext()
  const { socket } = useSocket()
  const { findParent, findType } = useSchemas()
  const { exportDatasets: exportDatasetsService } = useDatasetServices()

  const { NETWORK_ERROR, CREATION_ERROR, EMPTY_REF_FIELD_ERROR } = useLanguage({
    NETWORK_ERROR: { en: "Network connect error", es: "Error en la conexión" },
    CREATION_ERROR: { en: "Creation error", es: "Hubo un error en la creación de los datasets" },
    EMPTY_REF_FIELD_ERROR: {
      en: "Can't export a ref field that doesn't point to another field",
      es: "No se puede exportar un campo ref que no apunte a otro campo",
    },
  })

  const [createDataLoading, setCreateDataLoading] = useState(false)

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_FILE_URL, (fileName) => {
      window.open(API_ROUTES.DOWNLOAD_FILE(API_ROUTE, fileName), "_blank")
      setCreateDataLoading(false)
      handleResetConfig()
    })

    socket.on(SOCKET_EVENTS.CREATION_ERROR, () => {
      toastError(CREATION_ERROR)
      setCreateDataLoading(false)
    })

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.CREATE_DATASETS)
    }
  }, [socket, language])

  function handleExportAllDatasets() {
    try {
      setCreateDataLoading(true)

      const exportDatasets: Array<ExportDataset> = datasets.map((dat) =>
        dat.exportObject({
          findOption: findType,
          findParent: findParent,
          searchRefField: searchRefField,
        }),
      )

      const datasetsDTO: Array<ExportDatasetDTO> = exportDatasets.map((d) => ({
        name: d.name,
        limit: d.limit,
        fields: d.fields,
      }))

      exportDatasetsService({
        datasets: datasetsDTO,
        config: { fileType: config.file.fileType, arguments: {} },
      }).catch((error) => {
        if (error instanceof ConnectSockerError) {
          toastError(NETWORK_ERROR)
        }
      })
    } catch (error) {
      setCreateDataLoading(false)

      if (error instanceof EmptyRefFieldError) {
        toastError(EMPTY_REF_FIELD_ERROR)
      }
    }
  }

  function handleCreateAllDatasets() {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_ALL_DATASETS,
      handleCreateAllDatasets: handleExportAllDatasets,
    })
  }

  function handleExportDataset(dataset: Dataset) {
    if (socket.connected) {
      setCreateDataLoading(true)

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: [dataset],
        config,
      })
    } else {
      toastError(NETWORK_ERROR)
      setCreateDataLoading(false)
    }
  }

  function handleExportDatasetByIndex(datasetIndex: number) {
    handleExportDataset(datasets[datasetIndex])
  }

  function handleExportSelectedDataset() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
        handleCreateSelectDataset: () => handleExportDataset(selectedDataset),
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
    handleAddDatasetService()
  }

  return {
    handleExportSelectedDataset,
    handleCreateAllDatasets,
    createDataLoading,
    handleExportDatasetByIndex,
    handleAddNewField,
    handleAddDataset,
    datasets,
    showFieldsMenu,
  }
}
