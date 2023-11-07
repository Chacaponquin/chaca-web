import { useLanguage } from "@modules/app/modules/language/hooks"
import { Fragment } from "react"

export default function Text() {
  const { FIRST_HEADER, SECOND_HEADER } = useLanguage({
    FIRST_HEADER: { en: "A simple way", es: "Una forma fácil" },
    SECOND_HEADER: { en: "To create your Data", es: "De crear tus Datos" },
  })

  return (
    <Fragment>
      <h1 className="text-7xl font-fontBold">{FIRST_HEADER}</h1>
      <h1 className="text-7xl font-fontBold text-purple-600">{SECOND_HEADER}</h1>
      <p className="text-xl mt-8 px-20 text-scale-11">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nulla eveniet laudantium
        delectus deleniti voluptates accusamus hic quo magnam eos!
      </p>
    </Fragment>
  )
}
