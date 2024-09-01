import { ChacaLogo, Menu, OpenFields } from "./components"
import { useContext } from "react"
import { HomeContext } from "@containers/Home/context"
import { useDataset } from "@modules/dataset/hooks"
import clsx from "clsx"

interface Props {
  handleExportDataset(): void
  handleExportImage(): void
  handleDeleteAll(): void
  loading: boolean
}

export default function Navbar({
  handleExportDataset,
  handleExportImage,
  handleDeleteAll,
  loading,
}: Props) {
  const { smallWindow } = useContext(HomeContext)
  const { dataset, handleAddSchema } = useDataset()

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
        {smallWindow && dataset.length > 0 && <OpenFields />}

        <ChacaLogo />

        {dataset.length > 0 && (
          <Menu
            loading={loading}
            handleAddSchema={handleAddSchema}
            handleExportDataset={handleExportDataset}
            handleExportImage={handleExportImage}
            handleDeleteAll={handleDeleteAll}
          />
        )}
      </section>

      <section className="flex items-center gap-x-6 h-full"></section>
    </nav>
  )
}
