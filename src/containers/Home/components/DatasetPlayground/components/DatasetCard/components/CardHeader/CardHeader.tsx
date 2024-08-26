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
    "border-b-[0.5px] border-white",
    "py-2 px-12",
  )

  return (
    <header className={CLASS}>
      <DatasetInfo limit={limit} name={name} />

      <ChacaDropdown
        header={<Config name={nameId} />}
        className="translate-y-1"
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
