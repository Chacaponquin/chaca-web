import { APP_ROUTES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { NavbarLink } from "../interfaces"
import { useState } from "react"
import { INTRODUCTION } from "@modules/docs/domain/core/sections/get-started"

export default function useNavbar() {
  const [open, setOpen] = useState(false)

  function handleChange() {
    setOpen((prev) => !prev)
  }

  const { HOME_TEXT, CONTACT_US_TEXT, DOCS_TEXT } = useTranslation({
    HOME_TEXT: { en: "Home", es: "Inicio" },
    DOCS_TEXT: { en: "Docs", es: "Docs" },
    CONTACT_US_TEXT: { en: "Contact Us", es: "Contáctanos" },
  })

  const LINKS: NavbarLink[] = [
    { route: APP_ROUTES.HOME, title: HOME_TEXT },
    { route: INTRODUCTION.redirect, title: DOCS_TEXT },
    { route: APP_ROUTES.CONTACT_US, title: CONTACT_US_TEXT },
  ]

  return { LINKS, open, handleChange }
}
