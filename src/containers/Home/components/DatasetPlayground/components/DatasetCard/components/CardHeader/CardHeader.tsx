import { ChacaDropdown } from "@form/components"
import { Config, DatasetInfo, DatasetMenu } from "./components"

interface CardHeaderProps {
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
        className="bg-white dark:bg-darkColor dark:fill-white dark:text-white dark:stroke-white shadow-lg mt-5 -translate-x-6 z-50 rounded text-black fill-black stroke-black"
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
