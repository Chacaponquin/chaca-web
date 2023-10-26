import { ArrowLeft } from "@modules/app/modules/icon/components"
import { useLanguage } from "@modules/app/modules/language/hooks"

interface Props {
  handleCloseFieldsMenu: () => void
}

export default function CloseSection({ handleCloseFieldsMenu }: Props) {
  const { CLOSE_MESSAGE } = useLanguage({ CLOSE_MESSAGE: { en: "Close", es: "Cerrar" } })

  return (
    <section className="flex justify-start pt-4 pb-1 px-4">
      <button
        onClick={handleCloseFieldsMenu}
        className="flex fill-black gap-x-4 items-center dark:fill-white dark:text-white text-black"
      >
        <ArrowLeft size={23} />
        <p className="text-lg font-fontMedium">{CLOSE_MESSAGE}</p>
      </button>
    </section>
  )
}
