import { useLanguage } from "@modules/app/modules/language/hooks"

const ExportButton = ({ handleExportAllDatasets }: { handleExportAllDatasets: () => void }) => {
  const UI_TEXT = useLanguage({
    EXPORT_ALL_TEXT: { en: "Export All", es: "Exportar Datasets" },
  })

  return (
    <div className="w-full px-3 py-2">
      <button
        className="px-3 py-1 text-white font-fontBold rounded-sm bg-secondColor text-lg w-full transition-all duration-300 hover:opacity-70"
        onClick={handleExportAllDatasets}
      >
        {UI_TEXT.EXPORT_ALL_TEXT}
      </button>
    </div>
  )
}

export default ExportButton
