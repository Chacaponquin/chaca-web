import { useSocket } from "@modules/app/modules/socket/hooks"
import { ExportDatasetDTO } from "../dto/dataset"
import { DATASETS_ERROR_HTTP_STATUS, SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { useConfig } from "@modules/config/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnv } from "@modules/app/modules/env/hooks"
import {
  CreateDatasetError,
  CyclicEventError,
  DatasetError,
  DownloadDatasetError,
  EmptySequentialFieldError,
  NotEnoughValuesRefError,
  NotExistFieldError,
  TryRefANotKeyField,
} from "../errors/dataset"
import { ImageFormats } from "@modules/config/interfaces"
import { DatasetCreationError } from "@modules/app/modules/socket/domain/error"

interface handleExportDatasetsProps {
  datasets: ExportDatasetDTO[]
  config: ExportFileConfigDTO
  onError(error: ConnectSockerError): void
  onFinally(): void
}

interface DownloadDatasetProps {
  id: string
  filename: string
  onError(error: DatasetError): void
  onFinally(): void
}

interface DownloadDatasetsImageProps {
  filename: string
  image: string
  format: ImageFormats
}

interface CreationErrorProps {
  error: DatasetCreationError
  onFinally(): void
  onError(error: DatasetError): void
}

export default function useDatasetServices() {
  const { socket } = useSocket()
  const { fileOptions } = useConfig()
  const { API_ROUTE } = useEnv()

  function exportDatasets({ config, datasets, onError }: handleExportDatasetsProps): void {
    const found = fileOptions.find((f) => f.id === config.type)

    if (found) {
      if (socket.connected) {
        const newConfig: ExportFileConfigDTO = {
          arguments: config.arguments,
          type: found.fileType,
          name: config.name,
        }

        socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
          datasets: datasets,
          config: newConfig,
        })
      } else {
        onError(new ConnectSockerError())
      }
    }
  }

  function downloadDatasetFile({ id, filename, onError, onFinally }: DownloadDatasetProps) {
    fetch(API_ROUTES.DOWNLOAD_FILE(API_ROUTE, id), {
      method: "GET",
      headers: {
        "Content-Type": "application/zip",
      },
    })
      .then((response) => {
        if (response.ok) {
          response
            .blob()
            .then((blob) => {
              const url = window.URL.createObjectURL(new Blob([blob]))

              const link = document.createElement("a")
              link.href = url
              link.download = `${filename}.zip`

              document.body.appendChild(link)
              link.click()
              link.parentNode?.removeChild(link)
            })
            .catch(() => {
              onError(new DownloadDatasetError())
            })
            .finally(() => {
              onFinally()
            })
        } else {
          onError(new DownloadDatasetError())
        }
      })
      .catch(() => {
        onError(new DownloadDatasetError())
      })
  }

  function onCreationError({ onError, onFinally, error: ierror }: CreationErrorProps): void {
    let error: DatasetError

    if (ierror.code === DATASETS_ERROR_HTTP_STATUS.CYCLIC) {
      error = new CyclicEventError()
    } else if (ierror.code === DATASETS_ERROR_HTTP_STATUS.EMPTY_SEQUENTIAL) {
      error = new EmptySequentialFieldError(ierror.content.field)
    } else if (ierror.code === DATASETS_ERROR_HTTP_STATUS.NOT_ENOUGH_VALUES_REF) {
      error = new NotEnoughValuesRefError(ierror.content.keyField, ierror.content.refField)
    } else if (ierror.code === DATASETS_ERROR_HTTP_STATUS.DEFAULT) {
      error = new CreateDatasetError(ierror.content)
    } else if (ierror.code === DATASETS_ERROR_HTTP_STATUS.NOT_EXIST_FIELD) {
      error = new NotExistFieldError(ierror.content.field, ierror.content.refField)
    } else if (ierror.code === DATASETS_ERROR_HTTP_STATUS.REF_NOT_KEY) {
      error = new TryRefANotKeyField(ierror.content.field)
    } else {
      error = new DownloadDatasetError()
    }

    onError(error)
    onFinally()
  }

  function downloadDatasetsImage({ filename, image, format }: DownloadDatasetsImageProps) {
    const a = document.createElement("a")

    a.setAttribute("download", `${filename}.${format}`)
    a.setAttribute("href", image)
    a.click()
  }

  return { exportDatasets, downloadDatasetFile, downloadDatasetsImage, onCreationError }
}
