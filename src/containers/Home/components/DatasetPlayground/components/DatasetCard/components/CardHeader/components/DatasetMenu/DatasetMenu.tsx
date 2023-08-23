import { useLanguage } from "@modules/app/modules/language/hooks"

export default function DatasetMenu({
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
}: {
  handleEditDataset: () => void
  handleDeleteDataset: () => void
  handleExportDataset: () => void
}) {
  const { DELETE_OPTION, EDIT_OPTION, EXPORT_OPTION } = useLanguage({
    DELETE_OPTION: { en: "Delete", es: "Borrar" },
    EXPORT_OPTION: { en: "Export", es: "Exportar" },
    EDIT_OPTION: { en: "Edit", es: "Editar" },
  })

  const OPTION_CLASS =
    "text-lg py-2 px-5 transition-all duration-300 hover:bg-grayColor cursor-pointer"

  return (
    <ul className="absolute bg-white shadow-lg rounded text-black right-7 top-16">
      <li onClick={handleEditDataset} className={OPTION_CLASS}>
        {EDIT_OPTION}
      </li>
      <li onClick={handleExportDataset} className={OPTION_CLASS}>
        {EXPORT_OPTION}
      </li>
      <li onClick={handleDeleteDataset} className={OPTION_CLASS}>
        {DELETE_OPTION}
      </li>
    </ul>
  )
}
