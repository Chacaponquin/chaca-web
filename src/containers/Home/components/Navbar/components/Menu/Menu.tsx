import { ChacaDropdown } from "@form/components"
import { useMenu } from "./hooks"
import { Button, Item } from "./components"

interface Props {
  handleExportAllDatasets(): void
  handleExportImage(): void
  handleAddDataset(): void
  handleDeleteAll(): void
}

export default function Menu({
  handleAddDataset,
  handleExportAllDatasets,
  handleExportImage,
  handleDeleteAll,
}: Props) {
  const { items } = useMenu({
    handleAddDataset,
    handleExportAllDatasets,
    handleExportImage,
    handleDeleteAll,
  })

  return (
    <div className="sm:ml-6 ml-4">
      <ChacaDropdown header={<Button />} height={350} className="shadow-lg">
        {items.map((item, index) => (
          <Item key={index} icon={item.icon} onClick={item.onClick} title={item.title} />
        ))}
      </ChacaDropdown>
    </div>
  )
}
