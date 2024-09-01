import { SCREEN_SIZES } from "@modules/app/constants"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { useSocket } from "@modules/app/modules/socket/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useScreen } from "@modules/shared/hooks"
import { createContext, createRef, RefObject, useEffect, useState } from "react"
import { useDatasetServices } from "@modules/dataset/services"
import { DatasetCreationError } from "@modules/app/modules/socket/domain/error"
import { RespExportDatasetDTO } from "@modules/dataset/dto/export"

interface Props {
  playgroundRef: RefObject<HTMLDivElement>
  exportLink: RefObject<HTMLAnchorElement>
  smallWindow: boolean
  createDataLoading: boolean
  handleChangeLoading(v: boolean): void
}

export const HomeContext = createContext<Props>({
  smallWindow: false,
  createDataLoading: false,
} as Props)

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const { condition } = useScreen(SCREEN_SIZES.LG)
  const { toastChacaError } = useToast()
  const { socket } = useSocket()
  const { downloadDatasetFile, onCreationError } = useDatasetServices()

  const playgroundRef = createRef<HTMLDivElement>()
  const exportLink = createRef<HTMLAnchorElement>()

  const [createDataLoading, setCreateDataLoading] = useState(false)

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_FILE_URL, handleFinishCreation)
    socket.on(SOCKET_EVENTS.CREATION_ERROR, handleErrorCreation)

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.CREATE_DATASET)
    }
  }, [socket, handleFinishCreation, handleErrorCreation])

  function handleErrorCreation(error: DatasetCreationError): void {
    onCreationError({
      error: error,
      onError: toastChacaError,
      onFinally() {
        setCreateDataLoading(false)
      },
    })
  }

  function handleFinishCreation({ filename, id }: RespExportDatasetDTO) {
    downloadDatasetFile({
      id: id,
      filename: filename,
      onError(error) {
        toastChacaError(error)
      },
      onFinally() {
        setCreateDataLoading(false)
      },
    })
  }

  const data: Props = {
    playgroundRef,
    smallWindow: !condition,
    exportLink,
    createDataLoading,
    handleChangeLoading: setCreateDataLoading,
  }

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}
