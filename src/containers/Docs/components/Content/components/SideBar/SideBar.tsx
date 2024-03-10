import { SelectedDoc } from "@containers/Docs/interfaces"
import { Sections } from "@containers/Docs/shared/components"
import clsx from "clsx"

interface Props {
  handleChangeSelectedDoc(section: SelectedDoc): void
  selectedDoc: SelectedDoc | null
}

export default function SideBar({ handleChangeSelectedDoc, selectedDoc }: Props) {
  const CLASS = clsx(
    "xl:flex flex-col hidden",
    "h-screen max-h-screen min-w-[320px] max-w-[320px]",
    "px-4 pb-2 pt-[75px]",
    "overflow-auto",
    "dark:border-r-[1px] dark:border-r-scale-7 border-r-2",
  )

  return (
    <aside className={CLASS}>
      <Sections handleChangeSelectedDoc={handleChangeSelectedDoc} selectedDoc={selectedDoc} />
    </aside>
  )
}
