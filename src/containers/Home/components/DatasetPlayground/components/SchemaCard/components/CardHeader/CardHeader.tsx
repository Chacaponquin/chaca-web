import { ChacaPopover } from "@modules/app/modules/form/components"
import { Config, DatasetInfo, DatasetMenu } from "./components"
import clsx from "clsx"
import { useState } from "react"

interface Props {
  handleEditSchema(): void
  handleDeleteSchema(): void
  handleExportSchema(): void
  handleCloneSchema(): void
  handleAddField(): void
  name: string
  limit: number
  nameId: string
}

const CLASS = clsx(
  "relative",
  "flex justify-center items-center",
  "border-b-[0.5px] border-white",
  "py-2 px-12",
)

export default function CardHeader({
  handleDeleteSchema,
  handleEditSchema,
  handleExportSchema,
  handleCloneSchema,
  handleAddField,
  limit,
  name,
  nameId,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className={CLASS}>
      <DatasetInfo limit={limit} name={name} />

      <ChacaPopover
        onClose={() => setOpen(false)}
        open={open}
        position="bottom"
        parent={<Config name={nameId} />}
      >
        <DatasetMenu
          handleDeleteSchema={handleDeleteSchema}
          handleEditSchema={handleEditSchema}
          handleExportSchema={handleExportSchema}
          handleCloneSchema={handleCloneSchema}
          handleAddField={handleAddField}
          name={nameId}
        />
      </ChacaPopover>
    </header>
  )
}
