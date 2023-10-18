import { ChacaDropdown } from "@form/components"
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
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
  limit,
  name,
}: CardHeaderProps) {
  return (
    <header className="flex relative justify-center py-3.5 px-12 border-b-[1px] border-white items-center">
      <DatasetInfo limit={limit} name={name} />

      <ChacaDropdown
        header={<Config name={name} />}
        id={`${name}-dataset-config-menu`}
        className="bg-white shadow-lg z-50 rounded text-black fill-black stroke-black"
      >
        <DatasetMenu
          handleDeleteDataset={handleDeleteDataset}
          handleEditDataset={handleEditDataset}
          handleExportDataset={handleExportDataset}
          name={name}
        />
      </ChacaDropdown>
    </header>
  )
}
