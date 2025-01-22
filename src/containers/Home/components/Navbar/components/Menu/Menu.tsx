import { Button, Command } from "./components"
import { ChacaPopover } from "@form/components"
import { ContentLoader } from "@modules/shared/components"
import {
  PopoverItem,
  PopoverList,
} from "@modules/app/modules/form/components/ChacaPopover/components"
import useMenu from "./hooks/useMenu"

interface Props {
  handleExportDataset(): void
  handleExportImage(): void
  handleAddSchema(): void
  handleDeleteAll(): void
  loading: boolean
}

export default function Menu({
  handleAddSchema,
  handleExportDataset,
  handleExportImage,
  handleDeleteAll,
  loading,
}: Props) {
  const { items, open, setOpen } = useMenu({
    handleAddSchema,
    handleExportDataset,
    handleExportImage,
    handleDeleteAll,
  })

  return (
    <div className="sm:ml-6 ml-4">
      {loading && <ContentLoader height={27} width={65} />}

      {!loading && (
        <ChacaPopover
          position="bottom"
          open={open}
          onClose={() => setOpen(false)}
          parent={<Button open={open} onClick={() => setOpen((prev) => !prev)} />}
        >
          <PopoverList>
            {items.map((i, index) => (
              <PopoverItem
                size="sm"
                text={i.title}
                key={index}
                onClick={() => {
                  i.onClick()
                  setOpen(false)
                }}
                selected={false}
                extra={<Command text={i.command} />}
                icon={i.icon}
              />
            ))}
          </PopoverList>
        </ChacaPopover>
      )}
    </div>
  )
}
