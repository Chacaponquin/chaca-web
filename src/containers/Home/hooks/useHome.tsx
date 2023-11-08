import { useEffect, useState } from "react"
import { SOCKET_EVENTS } from "@modules/app/modules/socket/constants"
import { useConfig } from "@modules/config/hooks"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import {
  useLanguage,
  useLanguageContext,
  useLanguageFunc,
} from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useEnv } from "@modules/app/modules/env/hooks"
import { useSocket } from "@modules/app/modules/socket/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { Dataset, ExportDataset } from "@modules/datasets/domain/tree"
import { useSchemas } from "@modules/schemas/hooks"
import {
  EmptyEnumFieldError,
  EmptyRefFieldError,
  EmptySequentialFieldError,
} from "@modules/datasets/errors"
import { useDatasetServices } from "@modules/datasets/services"
import { ExportDatasetDTO } from "@modules/datasets/dto/dataset"
import { ConnectSockerError } from "@modules/app/modules/socket/errors"
import { API_ROUTES } from "@modules/app/constants/ROUTES"

interface MessageFieldProps {
  field: string
}

export default function useHome() {
  const [createDataLoading, setCreateDataLoading] = useState(false)

  const {
    datasets,
    selectedDataset,
    handleAddDataset: handleAddDatasetService,
    searchRefField,
    showFieldsMenu,
  } = useDatasets()
  const { handleResetConfig, config } = useConfig()
  const { handleOpenModal } = useModal()
  const { toastError } = useToast()
  const { API_ROUTE } = useEnv()
  const { language } = useLanguageContext()
  const { socket } = useSocket()
  const { findParent, findType } = useSchemas()
  const { exportDatasets: exportDatasetsService } = useDatasetServices()

  const { NETWORK_ERROR, CREATION_ERROR, EMPTY_REF_FIELD_ERROR } = useLanguage({
    NETWORK_ERROR: { en: "Network connect error", es: "Error en la conexión" },
    CREATION_ERROR: { en: "Creation error", es: "Hubo un error en la creación de los datasets" },
    EMPTY_REF_FIELD_ERROR: {
      en: "Can't export a ref field that doesn't point to another field",
      es: "No se puede exportar un campo ref que no apunte a otro campo",
    },
  })

  const { EMPTY_ENUM_FIELD, EMPTY_SEQUENTIAL_FIELD } = useLanguageFunc({
    EMPTY_ENUM_FIELD: {
      en: (p: MessageFieldProps) => {
        return `The ${p.field} field is an enum and has no values to select from`
      },
      es: (p: MessageFieldProps) => {
        return `El campo ${p.field} es enum y no tiene valores para seleccionar`
      },
    },
    EMPTY_SEQUENTIAL_FIELD: {
      en: (p: MessageFieldProps) => {
        return `The field ${p.field} is sequential and has no values to generate`
      },
      es: (p: MessageFieldProps) => {
        return `El campo ${p.field} es sequencial y no tiene valores para generar`
      },
    },
  })

  useEffect(() => {
    socket.on(SOCKET_EVENTS.GET_FILE_URL, (fileName) => {
      window.open(API_ROUTES.DOWNLOAD_FILE(API_ROUTE, fileName), "_blank")
      setCreateDataLoading(false)
      handleResetConfig()
    })

    socket.on(SOCKET_EVENTS.CREATION_ERROR, () => {
      toastError({ message: CREATION_ERROR })
      setCreateDataLoading(false)
    })

    return () => {
      socket.off(SOCKET_EVENTS.GET_FILE_URL)
      socket.off(SOCKET_EVENTS.CREATION_ERROR)
      socket.off(SOCKET_EVENTS.CREATE_DATASETS)
    }
  }, [socket, language])

  function handleExportAllDatasets() {
    try {
      setCreateDataLoading(true)

      const exportDatasets: Array<ExportDataset> = datasets.map((dat) =>
        dat.exportObject({
          findOption: findType,
          findParent: findParent,
          searchRefField: searchRefField,
          fieldRoute: [],
        }),
      )

      const datasetsDTO: Array<ExportDatasetDTO> = exportDatasets.map((d) => ({
        name: d.name,
        limit: d.limit,
        fields: d.fields,
      }))

      exportDatasetsService({
        datasets: datasetsDTO,
        config: { fileType: config.file.fileType, arguments: {} },
      }).catch((error) => {
        if (error instanceof ConnectSockerError) {
          toastError({ message: NETWORK_ERROR })
        }
      })
    } catch (error) {
      setCreateDataLoading(false)

      if (error instanceof EmptyRefFieldError) {
        toastError({ message: EMPTY_REF_FIELD_ERROR })
      } else if (error instanceof EmptyEnumFieldError) {
        toastError(EMPTY_ENUM_FIELD({ field: error.field }))
      } else if (error instanceof EmptySequentialFieldError) {
        toastError(EMPTY_SEQUENTIAL_FIELD({ field: error.field }))
      }
    }
  }

  function handleCreateAllDatasets() {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_ALL_DATASETS,
      handleCreateAllDatasets: handleExportAllDatasets,
    })
  }

  function handleExportDataset(dataset: Dataset) {
    if (socket.connected) {
      setCreateDataLoading(true)

      socket.emit(SOCKET_EVENTS.CREATE_DATASETS, {
        datasets: [dataset],
        config,
      })
    } else {
      toastError({ message: NETWORK_ERROR })
      setCreateDataLoading(false)
    }
  }

  function handleExportDatasetByIndex(datasetIndex: number) {
    handleExportDataset(datasets[datasetIndex])
  }

  function handleExportSelectedDataset() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
        handleCreateSelectDataset: () => handleExportDataset(selectedDataset),
      })
    }
  }

  function handleAddNewField() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.ADD_FIELD,
        parentfieldId: selectedDataset.id,
        datasetId: selectedDataset.id,
      })
    }
  }

  function handleAddDataset() {
    handleAddDatasetService()
  }

  return {
    handleExportSelectedDataset,
    handleCreateAllDatasets,
    createDataLoading,
    handleExportDatasetByIndex,
    handleAddNewField,
    handleAddDataset,
    datasets,
    showFieldsMenu,
  }
}
