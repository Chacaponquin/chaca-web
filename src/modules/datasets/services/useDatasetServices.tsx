import { useSocket } from "@modules/app/modules/socket/hooks"
import { ExportDatasetDTO } from "../dto/dataset"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface ExportDatasetsProps {
  datasets: Array<ExportDatasetDTO>
  config: ExportFileConfigDTO
}

export default function useDatasetServices() {
  const { socket } = useSocket()

  async function handleExportDatasets({ config, datasets }: ExportDatasetsProps): Promise<void> {
    console.log(datasets)

    if (socket.connected) {
      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: datasets,
        config: config,
      })
    } else {
      throw new ConnectSockerError()
    }
  }

  return { handleExportDatasets }
}
