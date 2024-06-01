import { SCREEN_SIZES } from "@modules/app/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { DATASETS_ERROR_HTTP_STATUS, SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { useSocket } from "@modules/app/modules/socket/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/tree"
import { ExportDatasetDTO, RespExportDatasetDTO } from "@modules/datasets/dto/dataset"
import { useSchemas } from "@modules/schemas/hooks"
import { useScreen } from "@modules/shared/hooks"
import { createContext, createRef, RefObject, useEffect, useState } from "react"
import { useHomeTranslations } from "../hooks"
import { DatasetCreationError } from "@modules/app/modules/socket/domain/error"
import { useDatasetServices } from "@modules/datasets/services"
import {
  EmptyEnumFieldError,
  EmptyRefFieldError,
  EmptySequentialFieldError,
} from "@modules/datasets/errors/dataset"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { useDatasets } from "@modules/datasets/hooks"

interface Props {
  fieldsMenuRef: RefObject<HTMLElement>
  playgroundRef: RefObject<HTMLDivElement>
  exportLink: RefObject<HTMLAnchorElement>
  smallWindow: boolean
  createDataLoading: boolean
  exportDatasets(inputDatasets: Dataset[], config: Config): void
}

export const HomeContext = createContext<Props>({ smallWindow: false } as Props)

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const { condition } = useScreen(SCREEN_SIZES.LG)
  const { toastError } = useToast()
  const { language } = useLanguage()
  const { socket } = useSocket()
  const { findParent, findType } = useSchemas()
  const { exportDatasets: exportDatasetsService, downloadDatasetFile } = useDatasetServices()
  const { searchRefField } = useDatasets()

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
  }, [socket, language, handleFinishCreation, handleErrorCreation])

  function handleFinishCreation({ filename, id }: RespExportDatasetDTO) {
    downloadDatasetFile({
      id: id,
      filename: filename,
      onError() {
        toastError({ message: CREATION_ERROR, id: "dataset-creation" })
      },
      onFinally() {
        setCreateDataLoading(false)
      },
    })
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

  function exportDatasets(idatasets: Dataset[], config: Config): void {
    try {
      setCreateDataLoading(true)

      const datasetsDTO: ExportDatasetDTO[] = idatasets.map((d) => ({
        limit: d.limit,
        name: d.name,
        fields: d.exportFields({
          findOption: findType,
          findParent: findParent,
          searchRefField: searchRefField,
          fieldRoute: [],
        }),
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
        toastError({ message: EMPTY_REF_FIELD_ERROR, id: "empty-ref-field" })
      } else if (error instanceof EmptyEnumFieldError) {
        toastError(EMPTY_ENUM_FIELD({ field: error.field }))
      } else if (error instanceof EmptySequentialFieldError) {
        toastError(EMPTY_SEQUENTIAL_FIELD({ field: error.field }))
      } else if (error instanceof ConnectSockerError) {
        toastError({ message: NETWORK_ERROR, id: "network" })
      }

      setCreateDataLoading(false)
    }
  }

  const data: Props = {
    fieldsMenuRef,
    playgroundRef,
    smallWindow: !condition,
    exportLink,
    createDataLoading,
    exportDatasets,
  }

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}
