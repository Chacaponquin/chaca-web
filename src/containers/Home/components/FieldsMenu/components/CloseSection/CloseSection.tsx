import { ArrowLeft } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import clsx from "clsx"
import { useState } from "react"

interface Props {
  handleCloseFieldsMenu: () => void
}

export default function CloseSection({ handleCloseFieldsMenu }: Props) {
  const { CLOSE_MESSAGE } = useTranslation({ CLOSE_MESSAGE: { en: "Close", es: "Cerrar" } })
  const [hover, setHover] = useState(false)

  const iconClass = clsx("transition-all duration-200 -translate-y-[1px]", {
    "-translate-x-1": hover,
  })

  function handleHover() {
    setHover(true)
  }

  function handleBlur() {
    setHover(false)
  }

  return (
    <section className="flex justify-start pt-4 pb-1 px-4">
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleBlur}
        onClick={handleCloseFieldsMenu}
        className="flex fill-black gap-x-4 items-center dark:fill-white dark:text-white text-black"
      >
        <div className={iconClass}>
          <ArrowLeft size={23} />
        </div>
        <p className="text-lg font-fontMedium">{CLOSE_MESSAGE}</p>
      </button>
    </section>
  )
}
