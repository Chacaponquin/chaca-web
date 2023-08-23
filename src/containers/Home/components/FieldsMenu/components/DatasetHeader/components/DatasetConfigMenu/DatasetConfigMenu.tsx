import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context/DatasetContext/DatasetsContext"
import clsx from "clsx"
import { UserContext } from "@modules/user/context/UserContext"
import { AppContext } from "@modules/app/context"
import { useDatasetServices } from "@modules/datasets/services"
import { ChacaNumberInput } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface DatasetConfigMenuProps {
  handleAddDatasetField: () => void
  handleDeleteDataset: () => void
  handleExportDataset: () => void
  handleEditDataset: () => void
  menuRef: React.MutableRefObject<HTMLDivElement | null>
}

const DatasetConfigMenu = ({
  handleAddDatasetField,
  handleDeleteDataset,
  handleExportDataset,
  handleEditDataset,
  menuRef,
}: DatasetConfigMenuProps) => {
  const { selectedDataset, datasets } = useContext(DatasetsContext)
  const { actualUser } = useContext(UserContext)
  const { noUserLimits } = useContext(AppContext)
  const { changeDocumentsLimit } = useDatasetServices()

  const UI_TEXT = useLanguage({
    DOCUMENTS_OPTION: { en: "Documents", es: "Documentos" },
    NEW_FIELD_OPTION: { en: "New Field", es: "Nuevo Campo" },
    DELETE_OPTION: { en: "Delete", es: "Borrar" },
    EXPORT_OPTION: { en: "Export", es: "Exportar" },
    EDIT_OPTION: { en: "Edit", es: "Editar" },
  })

  const handleChangeDocumentsLimit = (limit: number) => {
    changeDocumentsLimit(limit)
  }

  const commonClass = (c: string) => {
    return clsx("w-full px-4 py-[6px] cursor-pointer flex items-center", c)
  }

  const textDivClass = commonClass(
    "flex items-center text-sm text-center transition-all duration-300 hover:bg-slate-200",
  )

  return (
    <div
      className='absolute flex flex-col -translate-x-0 translate-y-5 rounded bg-white shadow-lg'
      ref={menuRef}
    >
      <div className={commonClass("gap-4")}>
        <p className='mb-0 text-sm'>{UI_TEXT.DOCUMENTS_OPTION}</p>
        <ChacaNumberInput
          min={1}
          max={actualUser ? actualUser.limitDocuments : noUserLimits.LIMIT_DOCUMENTS}
          value={selectedDataset.limit}
          onChange={(value) => {
            handleChangeDocumentsLimit(value)
          }}
          size={80}
        />
      </div>

      <div className={textDivClass} onClick={handleEditDataset}>
        {UI_TEXT.EDIT_OPTION}
      </div>

      <div className={textDivClass} onClick={handleAddDatasetField}>
        {UI_TEXT.NEW_FIELD_OPTION}
      </div>

      {datasets.length > 1 && (
        <div className={textDivClass} onClick={handleDeleteDataset}>
          {UI_TEXT.DELETE_OPTION}
        </div>
      )}

      <div className={textDivClass} onClick={handleExportDataset}>
        {UI_TEXT.EXPORT_OPTION}
      </div>
    </div>
  )
}

export default DatasetConfigMenu
