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
    "text-base cursor-pointer transition-all duration-300 whitespace-nowrap",
    {
      "text-principalColor": isSelect,
      "text-slate-500": !isSelect,
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
