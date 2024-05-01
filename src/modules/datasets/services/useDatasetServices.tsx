import { useSocket } from "@modules/app/modules/socket/hooks"
import { ExportDatasetDTO } from "../dto/dataset"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { useConfig } from "@modules/config/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnv } from "@modules/app/modules/env/hooks"
import { DatasetError, DownloadDatasetError } from "../errors"
import { ImageFormats } from "@modules/config/interfaces"

interface ExportDatasetsProps {
  datasets: ExportDatasetDTO[]
  config: ExportFileConfigDTO
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

export default function useDatasetServices() {
  const { socket } = useSocket()
  const { fileOptions } = useConfig()
  const { API_ROUTE } = useEnv()

  function exportDatasets({ config, datasets }: ExportDatasetsProps): void {
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
        throw new ConnectSockerError()
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

  function downloadDatasetsImage({ filename, image, format }: DownloadDatasetsImageProps) {
    const a = document.createElement("a")

    a.setAttribute("download", `${filename}.${format}`)
    a.setAttribute("href", image)
    a.click()
  }

  return { exportDatasets, downloadDatasetFile, downloadDatasetsImage }
}
