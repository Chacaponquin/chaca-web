import { ApiSubSection } from "../../../../../../modules/docs/interfaces/apiSections.interface"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { useDocsService } from "@modules/docs/services/docs.service"

export default function SubSection({
  subSection,
  isSelect,
  sectionURL,
}: {
  sectionURL: string
  subSection: ApiSubSection
  isSelect: boolean
}) {
  const { createSubSectionUrl } = useDocsService()

  const subOptionClass = clsx(
    "px-2 text-base cursor-pointer py-1 transition-all duration-300 whitespace-nowrap",
    {
      "bg-principalColor text-white": isSelect,
      "hover:bg-principalColor hover:text-white text-slate-500": !isSelect,
    },
  )

  return (
    <Link
      to={createSubSectionUrl(sectionURL, subSection.frontRoute)}
      className={subOptionClass}
      replace={true}
    >
      {subSection.title}
    </Link>
  )
}
