import { ApiSubSection } from "../../../interfaces/apiSections.interface"
import clsx from "clsx"

export default function SubSection({
  subSection,
  isSelect,
  handleSelectSubSection,
}: {
  subSection: ApiSubSection
  isSelect: boolean
  handleSelectSubSection: () => void
}) {
  const subOptionClass = () => {
    return clsx("px-2 text-base cursor-pointer py-1 transition-all duration-300", {
      "bg-principalColor text-white": isSelect,
      "hover:bg-principalColor hover:text-white text-slate-500": !isSelect,
    })
  }

  return (
    <div className={subOptionClass()} onClick={handleSelectSubSection}>
      {subSection.title}
    </div>
  )
}
