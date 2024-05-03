import { ChacaDropdown } from "@form/components"
import { Config, DatasetInfo, DatasetMenu } from "./components"
import clsx from "clsx"

interface Props {
  handleEditDataset(): void
  handleDeleteDataset(): void
  handleExportDataset(): void
  handleCloneDataset(): void
  handleAddField(): void
  name: string
  limit: number
  nameId: string
}

export default function CardHeader({
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
  handleCloneDataset,
  handleAddField,
  limit,
  name,
  nameId,
}: Props) {
  const CLASS = clsx(
    "relative",
    "flex justify-center items-center",
    "border-b-[1px] border-white",
    "py-3.5 px-12",
  )

  return (
    <header className={CLASS}>
      <DatasetInfo limit={limit} name={name} />

      <ChacaDropdown
        header={<Config name={nameId} />}
        className="bg-white dark:bg-scale-3 dark:fill-white dark:text-white dark:stroke-white shadow-lg mt-5 -translate-x-6 z-50 rounded text-black fill-black stroke-black"
        id={`${nameId}-dataset-config-menu`}
        height={300}
      >
        <DatasetMenu
          handleDeleteDataset={handleDeleteDataset}
          handleEditDataset={handleEditDataset}
          handleExportDataset={handleExportDataset}
          handleCloneDataset={handleCloneDataset}
          handleAddField={handleAddField}
          name={nameId}
        />
      </ChacaDropdown>
    </header>
  )
}
