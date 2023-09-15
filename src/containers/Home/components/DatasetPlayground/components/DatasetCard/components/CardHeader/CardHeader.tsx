import { Config, DatasetInfo, DatasetMenu } from "./components"

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
  return (
    <header className="flex relative justify-center py-3.5 px-10 border-b-[1px] border-white items-center">
      <DatasetInfo limit={limit} name={name} />

      <Config handleInteractOpenConfig={handleInteractOpenConfig} name={name} />

      {openConfig && (
        <DatasetMenu
          handleDeleteDataset={handleDeleteDataset}
          handleEditDataset={handleEditDataset}
          handleExportDataset={handleExportDataset}
          name={name}
        />
      )}
    </header>
  )
}
