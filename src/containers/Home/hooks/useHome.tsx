import { useContext, useEffect, useState, useMemo } from "react"
import { toast } from "react-toastify"
import { SOCKET_EVENTS } from "../constants"
import { DatasetsContext } from "@modules/datasets/context"
import { configServices } from "@modules/config/services"
import io from "socket.io-client"
import { ModalContext } from "@modules/modal/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { userServices } from "@modules/user/services"
import { useLanguage } from "@modules/app/modules/language/hooks"

export const useHome = () => {
  const { datasets, config, selectedDataset } = useContext(DatasetsContext)
  const { resetConfig } = configServices()
  const { getTokenCookie } = userServices()
  const { handleOpenModal } = useContext(ModalContext)

  const { NETWORK_ERROR } = useLanguage({
    NETWORK_ERROR: { en: "Network connect error", es: "Error en la conexion" },
  })

  const [createDataLoading, setCreateDataLoading] = useState(false)

  const socket = useMemo(
    () =>
      io(process.env.REACT_APP_SOCKET_URL as string, {
        auth: {
          token: `Bearer ${getTokenCookie()}`,
        },
      }),
    [],
  )

  useEffect(() => {
    socket.on(SOCKET_EVENTS.CONNECT_ERROR, () => {
      setTimeout(() => socket.connect(), 5000)
    })

    // evento cuando se termine la creacion de los datasets
    socket.on(SOCKET_EVENTS.GET_FILE_URL, (downUrl) => {
      // abrir el link de descarga
      window.open(`${process.env.REACT_APP_API_URL}/${downUrl}`)
      // cerrar el modal de creation loading
      setCreateDataLoading(false)
      // resetear la configuracion de exportacion
      resetConfig()
    })

    socket.on(SOCKET_EVENTS.CREATION_ERROR, () => {
      toast.error("Hubo un error en la creacion de los datasets")
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

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: datasets.map((d) => d.getDatasetObject()),
        config,
      })
    } else {
      toast.error(NETWORK_ERROR)
      setCreateDataLoading(false)
    }
  }

  const handleExportSelectDataset = () => {
    if (socket.connected) {
      setCreateDataLoading(true)

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: [selectedDataset.getDatasetObject()],
        config,
      })
    } else {
      toast.error(NETWORK_ERROR)
      setCreateDataLoading(false)
    }
  }

  const handleCreateAllDatasets = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_ALL_DATASETS,
      handleCreateAllDatasets: handleExportAllDatasets,
    })
  }

  const handleCreateSelectDataset = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
      handleCreateSelectDataset: handleExportSelectDataset,
    })
  }

  return {
    handleCreateSelectDataset,
    handleCreateAllDatasets,
    createDataLoading,
  }
}
