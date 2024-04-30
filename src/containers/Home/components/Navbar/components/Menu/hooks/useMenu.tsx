import { Delete, Image, Plus, Share } from "@modules/app/modules/icon/components"
import { MenuItem } from "../interfaces"

interface Props {
  handleExportAllDatasets(): void
  handleExportImage(): void
  handleAddDataset(): void
  handleDeleteAll(): void
}

export default function useMenu({
  handleAddDataset,
  handleExportAllDatasets,
  handleExportImage,
  handleDeleteAll,
}: Props) {
  const items: MenuItem[] = [
    { icon: Plus, title: "Añadir Dataset", onClick: handleAddDataset },
    { icon: Share, title: "Exportar todo", onClick: handleExportAllDatasets },
    { icon: Image, title: "Exportar imagen", onClick: handleExportImage },
    { icon: Delete, title: "Eliminar todo", onClick: handleDeleteAll },
  ]

  return { items }
}
