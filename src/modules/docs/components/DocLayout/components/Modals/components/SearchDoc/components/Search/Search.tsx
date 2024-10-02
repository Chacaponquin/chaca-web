import clsx from "clsx"
import { useState } from "react"
import { Search as IconSearch } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useSearchBox } from "react-instantsearch"

export default function Search() {
  const { query: search, refine } = useSearchBox()

  function handleChangeSearch(s: string) {
    refine(s)
  }

  const [focus, setFocus] = useState(false)

  const { PLACEHOLDER } = useTranslation({
    PLACEHOLDER: { en: "Search documentation", es: "Buscar documentación" },
  })

  const CLASS = clsx(
    "flex items-center",
    "gap-x-4",
    "dark:border-scale-7 border-[1px]",
    "rounded",
    "px-4 py-2.5",
    "bg-scale-4",

    { "outline outline-2 outline-purple-6": focus },
  )

  const INPUT_CLASS = clsx("bg-transparent", "outline-none", "w-full", "text-base", "w-full")

  return (
    <search className={CLASS}>
      <i className="fill-scale-11">
        <IconSearch size={20} />
      </i>

      <input
        type="text"
        placeholder={PLACEHOLDER}
        value={search}
        className={INPUT_CLASS}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => handleChangeSearch(e.target.value)}
      />
    </search>
  )
}
