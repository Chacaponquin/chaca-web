import { Search as SearchIcon } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import clsx from "clsx"

interface Props {
  handleClick(): void
  full: boolean
  className?: string
}

export default function Search({ handleClick, full, className }: Props) {
  const { TEXT } = useTranslation({ TEXT: { en: "Search", es: "Buscar" } })

  const CLASS = clsx(
    "gap-x-7",
    "outline-2 outline outline-transparent",
    "px-3 py-1.5",
    "flex items-center justify-between",
    "transition-all duration-200",
    "rounded",
    "hover:outline-purple-6",
    "bg-scale-5",
    "text-black dark:text-white",
    "dark:border-scale-7 border-[1px]",

    { "mr-3 w-max": !full, "w-full": full },

    className,
  )

  return (
    <button type="button" onClick={handleClick} className={CLASS}>
      <div className="flex items-center gap-x-3.5">
        <i className="fill-white stroke-white">
          <SearchIcon size={17} />
        </i>

        <p className="text-sm text-scale-11">{TEXT}</p>
      </div>

      <span className="font-fontCodeMedium text-xs py-1 px-1.5 rounded bg-scale-7">Ctrl+K</span>
    </button>
  )
}
