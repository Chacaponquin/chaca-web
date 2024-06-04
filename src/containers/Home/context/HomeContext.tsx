import { SCREEN_SIZES } from "@modules/app/constants"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { useSocket } from "@modules/app/modules/socket/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/tree"
import { ExportDatasetDTO, RespExportDatasetDTO } from "@modules/datasets/dto/dataset"
import { useSchemas } from "@modules/schemas/hooks"
import { useScreen } from "@modules/shared/hooks"
import { createContext, createRef, RefObject, useEffect, useState } from "react"
import { useDatasetServices } from "@modules/datasets/services"
import { useDatasets } from "@modules/datasets/hooks"
import { DatasetCreationError } from "@modules/app/modules/socket/domain/error"

interface Props {
  fieldsMenuRef: RefObject<HTMLElement>
  playgroundRef: RefObject<HTMLDivElement>
  exportLink: RefObject<HTMLAnchorElement>
  smallWindow: boolean
  createDataLoading: boolean
  handleExportDatasets(inputDatasets: Dataset[], config: Config): void
}

export const HomeContext = createContext<Props>({ smallWindow: false } as Props)

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const { condition } = useScreen(SCREEN_SIZES.LG)
  const { toastChacaError } = useToast()
  const { socket } = useSocket()
  const { findParent, findType } = useSchemas()
  const { exportDatasets, downloadDatasetFile, onCreationError } = useDatasetServices()
  const { searchRefField } = useDatasets()

  const fieldsMenuRef = createRef<HTMLElement>()
  const playgroundRef = createRef<HTMLDivElement>()
  const exportLink = createRef<HTMLAnchorElement>()

  const [createDataLoading, setCreateDataLoading] = useState(false)

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_FILE_URL, handleFinishCreation)
    socket.on(SOCKET_EVENTS.CREATION_ERROR, handleErrorCreation)

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.CREATE_DATASETS)
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

  function handleExportDatasets(idatasets: Dataset[], config: Config): void {
    setCreateDataLoading(true)

    const datasetsDTO: ExportDatasetDTO[] = []
    for (const dataset of idatasets) {
      const [fields, errors] = dataset.exportFields({
        findOption: findType,
        findParent: findParent,
        searchRefField: searchRefField,
        fieldRoute: [],
      })

      if (errors.length === 0) {
        datasetsDTO.push({
          limit: dataset.limit,
          name: dataset.name,
          fields: fields,
        })

        exportDatasets({
          datasets: datasetsDTO,
          config: {
            type: config.file.type,
            arguments: config.file.arguments,
            name: config.file.name,
          },
          onError: toastChacaError,
          onFinally() {
            setCreateDataLoading(false)
          },
        })
      } else {
        for (const error of errors) {
          toastChacaError(error)
        }

        setCreateDataLoading(false)
      }
    }
  }

  const data: Props = {
    fieldsMenuRef,
    playgroundRef,
    smallWindow: !condition,
    exportLink,
    createDataLoading,
    handleExportDatasets,
  }

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}
