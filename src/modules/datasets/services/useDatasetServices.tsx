import { useSocket } from "@modules/app/modules/socket/hooks"
import { ExportDatasetDTO } from "../dto/dataset"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { useConfig } from "@modules/config/hooks"

interface ExportDatasetsProps {
  datasets: Array<ExportDatasetDTO>
  config: ExportFileConfigDTO
}

export default function useDatasetServices() {
  const { socket } = useSocket()
  const { fileOptions } = useConfig()

  async function exportDatasets({ config, datasets }: ExportDatasetsProps): Promise<void> {
    const foundFile = fileOptions.find((f) => f.id === config.fileType)

    if (foundFile) {
      if (socket.connected) {
        const newConfig: ExportFileConfigDTO = { arguments: {}, fileType: foundFile.fileType }

        socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
          datasets: datasets,
          config: newConfig,
        })
      } else {
        throw new ConnectSockerError()
      }
    }
  }

  return { exportDatasets }
}
