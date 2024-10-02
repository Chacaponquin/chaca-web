import { Book } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { Hit as AlgoliaHit } from "instantsearch.js/es/types"
import { useModal } from "@modules/modal/hooks"
import { Highlight } from "react-instantsearch"
import { SaveIndex } from "@modules/docs/domain/core/base/save-index"

interface Props {
  hit: AlgoliaHit<SaveIndex>
}

export default function Element({ hit }: Props) {
  const { handleCloseModal } = useModal()

  const CLASS = clsx(
    "flex items-start",
    "py-3 px-5",
    "gap-x-4",
    "rounded",
    "bg-scale-4",
    "hover:outline hover:outline-2 hover:outline-purple-5",
    "dark:border-scale-7 border-[1px]",
  )

  return (
    <Link to={hit.url} onClick={handleCloseModal}>
      <article className={CLASS}>
        <div className="pt-1">
          <i className="stroke-scale-10">
            <Book size={22} />
          </i>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-base font-fontMedium mb-1">
            <Highlight
              attribute="title"
              hit={hit}
              classNames={{ highlighted: "bg-purple-6 px-0.5 text-white rounded" }}
            />
          </h2>
          <span className="text-sm">{hit.location}</span>
        </div>
      </article>
    </Link>
  )
}
