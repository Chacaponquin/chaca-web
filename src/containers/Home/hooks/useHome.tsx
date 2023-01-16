import { useContext, useEffect, useState } from "react"
import { DatasetsContext } from "../../../shared/context/DatasetsContext"
import { UserContext } from "../../../shared/context/UserContext"
import { toast } from "react-toastify"
import { ModalProps } from "../interfaces/modal.interface"
import { SOCKET_EVENTS } from "../constants/SOCKET_EVENTS"
import { CONFIG_ACTIONS } from "../constants/ACTION_TYPES"
import { AppConfigContext } from "../../../shared/context/AppConfigContext"

export const useHome = () => {
  const { datasets, config, selectedDataset, configDispatch } = useContext(DatasetsContext)
  const { socket } = useContext(UserContext)
  const { fileConfig } = useContext(AppConfigContext)

  const [openModal, setOpenModal] = useState<null | ModalProps>(null)

  const [createDataLoading, setCreateDataLoading] = useState(false)

  // porciento de completado de la creacion de los datasets
  const [porcent, setPorcent] = useState(0)

  const handleOpenModal = (props: ModalProps) => {
    setOpenModal(props)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_FILE_URL, (downUrl) => {
      window.open(`${process.env.REACT_APP_API_URL}/${downUrl}`)
      setCreateDataLoading(false)

      setPorcent(0)

      configDispatch({
        type: CONFIG_ACTIONS.SET_INITIAL_CONFIG,
        payload: { fileConfig },
      })
    })

    socket.on(SOCKET_EVENTS.DOCUMENT_CREATED, (porcent) => {
      console.log(porcent)
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
    }
  }, [])

  const handleCreateAllDatasets = async () => {
    if (socket.connected) {
      setCreateDataLoading(true)

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: datasets.map((d) => d.getDatasetObject()),
        config,
      })
    } else {
      toast.error("Error en la conexión")
      setCreateDataLoading(false)
    }
  }

  const handleCreateSelectDataset = () => {
    if (socket.connected) {
      setCreateDataLoading(true)

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: [selectedDataset.getDatasetObject()],
        config,
      })
    } else {
      toast.error("Error en la conexión")
      setCreateDataLoading(false)
    }
  }

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    porcent,
    handleCreateSelectDataset,
    handleCreateAllDatasets,
    createDataLoading,
  }
}
