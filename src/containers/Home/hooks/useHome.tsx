import { useContext, useEffect, useState, useMemo } from "react"
import { toast } from "react-toastify"
import { SOCKET_EVENTS } from "../constants"
import { DatasetsContext } from "@modules/datasets/context"
import { configServices } from "@modules/config/services"
import io from "socket.io-client"
import { useConfig, useLanguage } from "@modules/shared/hooks"
import { EmptyFormFieldError } from "@modules/config/errors"

export const useHome = () => {
  const { datasets, config, selectedDataset } = useContext(DatasetsContext)
  const { resetConfig, validateSaveSchemaForm } = configServices()
  const { getTokenCookie } = useConfig()

  const { NETWORK_ERROR } = useLanguage({
    NETWORK_ERROR: { en: "Network connect error", es: "Error en la conexion" },
  })

  const [createDataLoading, setCreateDataLoading] = useState(false)

  // porciento de completado de la creacion de los datasets
  const [porcent, setPorcent] = useState(0)

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
      // reset el contador del porciento
      setPorcent(0)
      // resetear la configuracion de exportacion
      resetConfig()
    })

    socket.on(SOCKET_EVENTS.DOCUMENT_CREATED, (porcent) => {
      setPorcent(Number(porcent) || 0)
    })

    socket.on(SOCKET_EVENTS.CREATION_ERROR, () => {
      toast.error("Hubo un error en la creacion de los datasets")
      setCreateDataLoading(false)
    })

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.DOCUMENT_CREATED)
      socket.off(SOCKET_EVENTS.CONNECT)
      socket.off(SOCKET_EVENTS.DISCONNECT)
    }
  }, [socket])

  const handleCreateAllDatasets = async () => {
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

  const handleCreateSelectDataset = () => {
    if (socket.connected) {
      try {
        validateSaveSchemaForm()
        setCreateDataLoading(true)

        socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
          datasets: [selectedDataset.getDatasetObject()],
          config,
        })
      } catch (error) {
        if (error instanceof EmptyFormFieldError) {
          toast.error(`The ${error.key} can not be an empty string`)
        }
      }
    } else {
      toast.error(NETWORK_ERROR)
      setCreateDataLoading(false)
    }
  }

  return {
    porcent,
    handleCreateSelectDataset,
    handleCreateAllDatasets,
    createDataLoading,
  }
}
