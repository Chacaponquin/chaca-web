import { Sections } from "@containers/Docs/shared/components"
import { DocSubSection } from "@modules/docs/domain/core/base"
import clsx from "clsx"

interface Props {
  selected: DocSubSection
}

export default function SideBar({ selected }: Props) {
  const CLASS = clsx(
    "xl:flex flex-col hidden",
    "h-screen max-h-screen w-full max-w-[320px]",
    "pl-16 pr-4 pb-2 pt-[75px]",
    "overflow-auto",
    "dark:border-r-[1px] dark:border-r-scale-7 border-r-2",
  )

  return (
    <aside className={CLASS}>
      <Sections selected={selected} />
    </aside>
  )
}
