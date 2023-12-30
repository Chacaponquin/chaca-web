import { ChacaDropdown } from "@form/components"
import { Config, DatasetInfo, DatasetMenu } from "./components"

interface Props {
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
}: Props) {
  const nameId = name.replace(" ", "-")

  return (
    <header className="flex relative justify-center py-3.5 px-12 border-b-[1px] border-white items-center">
      <DatasetInfo limit={limit} name={name} />

      <ChacaDropdown
        header={<Config name={nameId} />}
        className="bg-white dark:bg-scale-3 dark:fill-white dark:text-white dark:stroke-white shadow-lg mt-5 -translate-x-6 z-50 rounded text-black fill-black stroke-black"
        id={`${nameId}-dataset-config-menu`}
      >
        <DatasetMenu
          handleDeleteDataset={handleDeleteDataset}
          handleEditDataset={handleEditDataset}
          handleExportDataset={handleExportDataset}
          name={nameId}
        />
      </ChacaDropdown>
    </header>
  )
}
