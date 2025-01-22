import { ChacaPopover } from "@modules/app/modules/form/components"
import { PopoverList } from "@modules/app/modules/form/components/ChacaPopover/components"
import { useLanguage, useTranslation } from "@modules/app/modules/language/hooks"
import { useState } from "react"
import { Flag, Item } from "./components"
import { Languages } from "@modules/app/modules/language/interfaces"
import { APP_IMAGES } from "@modules/app/constants/image"

export default function Language() {
  const { language, handleChangeLanguage } = useLanguage()

  const [open, setOpen] = useState(false)

  const { ENGLISH, SPANISH } = useTranslation({
    ENGLISH: { en: "English", es: "Inglés" },
    SPANISH: { en: "Spanish", es: "Español" },
  })

  function handleChange(l: Languages) {
    handleChangeLanguage(l)
    setOpen(false)
  }

  return (
    <ChacaPopover
      onClickOutside={() => setOpen(false)}
      open={open}
      parent={
        <button type="button" className="px-1.5" onClick={() => setOpen((prev) => !prev)}>
          {language === "en" && <Flag image={APP_IMAGES.FLAGS.UNITED_STATES} />}
          {language === "es" && <Flag image={APP_IMAGES.FLAGS.SPAIN} />}
        </button>
      }
      position="bottom"
    >
      <PopoverList height={300}>
        <Item
          text={ENGLISH}
          image={APP_IMAGES.FLAGS.UNITED_STATES}
          onChange={() => handleChange("en")}
        />
        <Item text={SPANISH} image={APP_IMAGES.FLAGS.SPAIN} onChange={() => handleChange("es")} />
      </PopoverList>
    </ChacaPopover>
  )
}
