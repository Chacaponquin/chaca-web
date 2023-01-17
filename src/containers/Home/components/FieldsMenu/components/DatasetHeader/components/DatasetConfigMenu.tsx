import { useContext } from "react"
import { InputNumber } from "primereact/inputnumber"
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext"
import clsx from "clsx"
import { DATASETS_ACTIONS } from "../../../../../constants/ACTION_TYPES"
import { UserContext } from "../../../../../../../shared/context/UserContext"
import { AppConfigContext } from "../../../../../../../shared/context/AppConfigContext"
import { useLanguage } from "../../../../../../../shared/hooks"

const DatasetConfigMenu = ({
  handleAddDatasetField,
  handleDeleteDataset,
  handleExportDataset,
}: {
  handleAddDatasetField: () => void
  handleDeleteDataset: () => void
  handleExportDataset: () => void
}) => {
  const { selectedDataset, datasetDispatch, datasets } = useContext(DatasetsContext)
  const { actualUser } = useContext(UserContext)
  const { noUserLimits } = useContext(AppConfigContext)

  const UI_TEXT = useLanguage({
    DOCUMENTS_OPTION: { en: "Documents", es: "Documentos" },
    NEW_FIELD_OPTION: { en: "New Field", es: "Nuevo Campo" },
    DELETE_OPTION: { en: "Delete", es: "Borrar" },
    EXPORT_OPTION: { en: "Export", es: "Exportar" },
  })

  const commonClass = (c: string) => {
    return clsx(
      "w-full px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-slate-200 flex items-center",
      c,
    )
  }

  const textDivClass = () => {
    return commonClass(commonClass("flex items-center text-sm text-center font-fontBold"))
  }

  return (
    <div className='absolute flex flex-col -translate-x-0 translate-y-5 rounded bg-white shadow-lg'>
      <div className={commonClass("gap-4")}>
        <p className='mb-0 text-sm font-fontBold'>{UI_TEXT.DOCUMENTS_OPTION}</p>
        <InputNumber
          className='!text-sm w-[80px]'
          min={1}
          max={actualUser ? actualUser.limitDocuments : noUserLimits.LIMIT_DOCUMENTS}
          value={selectedDataset.limit}
          onChange={(e) => {
            datasetDispatch({
              type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
              payload: {
                datasetID: selectedDataset.id,
                newLimit: e.value || selectedDataset.limit,
              },
            })
          }}
        />
      </div>

      <div className={textDivClass()} onClick={handleAddDatasetField}>
        {UI_TEXT.NEW_FIELD_OPTION}
      </div>

      {datasets.length > 1 && (
        <div className={textDivClass()} onClick={handleDeleteDataset}>
          {UI_TEXT.DELETE_OPTION}
        </div>
      )}

      <div className={textDivClass()} onClick={handleExportDataset}>
        {UI_TEXT.EXPORT_OPTION}
      </div>
    </div>
  )
}

export default DatasetConfigMenu
