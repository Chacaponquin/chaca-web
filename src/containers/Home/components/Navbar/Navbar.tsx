import { ChacaLogo, Menu, OpenFields } from "./components"
import { useContext } from "react"
import { HomeContext } from "@containers/Home/context"
import { useDatasets } from "@modules/datasets/hooks"
import clsx from "clsx"

interface Props {
  handleExportAllDatasets(): void
  handleExportImage(): void
  handleAddDataset(): void
  handleDeleteAll(): void
}

export default function Navbar({
  handleAddDataset,
  handleExportAllDatasets,
  handleExportImage,
  handleDeleteAll,
}: Props) {
  const { smallWindow } = useContext(HomeContext)
  const { datasets } = useDatasets()

  const CLASS = clsx(
    "text-black dark:text-white",
    "bg-white dark:bg-scale-3",
    "px-6 esm:px-4",
    "flex items-center justify-between",
    "min-h-[65px] max-h-[65px]",
    "w-full",
    "dark:border-b-[1px] dark:border-b-scale-7 border-b-2",
  )

  return (
    <nav className={CLASS}>
      <section className="flex items-center">
        {smallWindow && datasets.length > 0 && <OpenFields />}
        <ChacaLogo />

        {datasets.length > 0 && (
          <Menu
            handleAddDataset={handleAddDataset}
            handleExportAllDatasets={handleExportAllDatasets}
            handleExportImage={handleExportImage}
            handleDeleteAll={handleDeleteAll}
          />
        )}
      </section>

      <section className="flex items-center gap-x-6 h-full"></section>
    </nav>
  )
}
