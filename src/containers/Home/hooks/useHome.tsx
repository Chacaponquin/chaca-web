import { useEffect, useState } from "react"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { useConfigServices } from "@modules/config/services"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"
import { useEnvServices } from "@modules/app/modules/env/services"
import { useSocketServices } from "@modules/app/modules/socket/services"
import { useDatasetServices } from "@modules/datasets/services"
import { useModalServices } from "@modules/modal/services"
import { Dataset } from "@modules/datasets/domain/tree"
import { ExportDataset } from "@modules/datasets/dto/dataset"

export const useHome = () => {
  const {
    datasets,
    selectedDataset,
    handleAddDataset: handleAddDatasetService,
  } = useDatasetServices()
  const { resetConfig, config } = useConfigServices()
  const { handleOpenModal } = useModalServices()
  const { toastError } = useToastServices()
  const { API_ROUTE } = useEnvServices()
  const { socket } = useSocketServices()

  const { NETWORK_ERROR, CREATION_ERROR } = useLanguage({
    NETWORK_ERROR: { en: "Network connect error", es: "Error en la conexión" },
    CREATION_ERROR: { en: "Creation error", es: "Hubo un error en la creación de los datasets" },
  })

  const [createDataLoading, setCreateDataLoading] = useState(false)

  useEffect(() => {
    socket.on(SOCKET_EVENTS.CONNECT_ERROR, () => {
      setTimeout(() => socket.connect(), 5000)
    })

    // evento cuando se termine la creacion de los datasets
    socket.on(SOCKET_EVENTS.GET_FILE_URL, (downUrl) => {
      // abrir el link de descarga
      window.open(`${API_ROUTE}/${downUrl}`)
      // cerrar el modal de creation loading
      setCreateDataLoading(false)
      // resetear la configuracion de exportacion
      resetConfig()
    })

    socket.on(SOCKET_EVENTS.CREATION_ERROR, () => {
      toastError(CREATION_ERROR)
      setCreateDataLoading(false)
    })

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.CONNECT)
      socket.off(SOCKET_EVENTS.DISCONNECT)
    }
  }, [socket])

  const handleExportAllDatasets = async () => {
    if (socket.connected) {
      setCreateDataLoading(true)

      const exportDatasets: Array<ExportDataset> = datasets.map((d) => d.exportObject())

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: exportDatasets,
        config,
      })
    } else {
      toastError(NETWORK_ERROR)
      setCreateDataLoading(false)
    }
  }

  const handleCreateAllDatasets = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_ALL_DATASETS,
      handleCreateAllDatasets: handleExportAllDatasets,
    })
  }

  const handleExportDataset = (dataset: Dataset) => {
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

  const handleExportDatasetByIndex = (datasetIndex: number) => {
    handleExportDataset(datasets[datasetIndex])
  }

  const handleExportSelectedDataset = () => {
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
        parentFieldID: selectedDataset.id,
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
  }
}
