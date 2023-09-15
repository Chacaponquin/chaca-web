import { Delete, Edit, Share } from "@modules/app/modules/icon/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface DatasetMenuProps {
  handleEditDataset: () => void
  handleDeleteDataset: () => void
  handleExportDataset: () => void
  name: string
}

export default function DatasetMenu({
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
  name,
}: DatasetMenuProps) {
  const { DELETE_OPTION, EDIT_OPTION, EXPORT_OPTION } = useLanguage({
    DELETE_OPTION: { en: "Delete", es: "Borrar" },
    EXPORT_OPTION: { en: "Export", es: "Exportar" },
    EDIT_OPTION: { en: "Edit", es: "Editar" },
  })

  const OPTION_CLASS =
    "flex items-center gap-x-5 text-lg py-2 px-5 transition-all duration-300 hover:bg-grayColor cursor-pointer"
  const ICON_SIZE = 17

  return (
    <ul
      id={`${name}-dataset-config-menu`}
      className="absolute bg-white shadow-lg rounded text-black right-7 top-12 z-50 fill-black stroke-black"
    >
      <li onClick={handleEditDataset} id={`${name}-dataset-edit-button`} className={OPTION_CLASS}>
        <Edit size={ICON_SIZE} />
        <p>{EDIT_OPTION}</p>
      </li>
      <li onClick={handleExportDataset} className={OPTION_CLASS}>
        <Share size={ICON_SIZE} />
        <p>{EXPORT_OPTION}</p>
      </li>
      <li onClick={handleDeleteDataset} className={OPTION_CLASS}>
        <Delete size={ICON_SIZE} />
        <p>{DELETE_OPTION}</p>
      </li>
    </ul>
  )
}
