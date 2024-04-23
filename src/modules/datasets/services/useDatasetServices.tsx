import { useSocket } from "@modules/app/modules/socket/hooks"
import { ExportDatasetDTO } from "../dto/dataset"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { useConfig } from "@modules/config/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useEnv } from "@modules/app/modules/env/hooks"
import { DownloadDatasetError } from "../errors"

interface ExportDatasetsProps {
  datasets: ExportDatasetDTO[]
  config: ExportFileConfigDTO
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

  async function downloadDatasetFile({ id, filename }: { id: string; filename: string }) {
    try {
      const response = await fetch(API_ROUTES.DOWNLOAD_FILE(API_ROUTE, id), {
        method: "GET",
        headers: {
          "Content-Type": "application/zip",
        },
      })

      if (response.ok) {
        const blob = await response.blob()

        const url = window.URL.createObjectURL(new Blob([blob]))

        const link = document.createElement("a")
        link.href = url
        link.download = `${filename}.zip`

        document.body.appendChild(link)

        link.click()

        link.parentNode?.removeChild(link)
      }
    } catch (error) {
      throw new DownloadDatasetError()
    }
  }

  return { exportDatasets, downloadDatasetFile }
}
