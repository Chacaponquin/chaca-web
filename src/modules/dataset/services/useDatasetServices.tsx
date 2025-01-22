import { useSocket } from "@modules/app/modules/socket/hooks"
import { DATASETS_ERROR_HTTP_STATUS, SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
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
import { DatasetCreationError } from "@modules/app/modules/socket/domain/error"
import { ExportSchemaDTO } from "../dto/export"

interface ExportDatasetsProps {
  dataset: ExportSchemaDTO[]
  config: ExportFileConfigDTO
  onError(error: ConnectSockerError): void
  onFinally(): void
}

interface CreationErrorProps {
  error: DatasetCreationError
  onFinally(): void
  onError(error: DatasetError): void
}

export default function useDatasetServices() {
  const { socket } = useSocket()

  function exportDatasets({ config, dataset, onError }: ExportDatasetsProps): void {
    if (socket.connected) {
      const newConfig: ExportFileConfigDTO = {
        arguments: config.arguments,
        type: config.type,
        name: config.name,
      }

      socket.emit(SOCKET_EVENTS.CREATE_DATASET, {
        dataset: dataset,
        config: newConfig,
      })
    } else {
      onError(new ConnectSockerError())
    }
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

  return { exportDatasets, onCreationError }
}
