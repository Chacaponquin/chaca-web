import { Config, DatasetMenu } from "./components"

interface CardHeaderProps {
  openConfig: boolean
  handleInteractOpenConfig: (e: React.MouseEvent) => void
  handleEditDataset: () => void
  handleDeleteDataset: () => void
  handleExportDataset: () => void
  name: string
  limit: number
}

export default function CardHeader({
  openConfig,
  handleInteractOpenConfig,
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
  limit,
  name,
}: CardHeaderProps) {
  const LIMIT = `(${limit})`

  return (
    <header className="flex relative justify-center py-5 px-10 border-b-[1px] border-white items-center">
      <div className="flex items-end gap-x-3">
        <h1 className="text-3xl font-fontBold">{name}</h1>
        <p className="text-2xl font-fontCodeBold">{LIMIT}</p>
      </div>

      <Config handleInteractOpenConfig={handleInteractOpenConfig} />

      {openConfig && (
        <DatasetMenu
          handleDeleteDataset={handleDeleteDataset}
          handleEditDataset={handleEditDataset}
          handleExportDataset={handleExportDataset}
        />
      )}
    </header>
  )
}
