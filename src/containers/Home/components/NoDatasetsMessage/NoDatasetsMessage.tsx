import { ChacaSimpleButton } from "@form/components"
import { APP_IMAGES } from "@modules/app/constants"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function NoDatasetsMessage({
  handleCreateDataset,
}: {
  handleCreateDataset: () => void
}) {
  const { MESSAGE } = useLanguage({ MESSAGE: { en: "Create Dataset", es: "Crear Dataset" } })

  return (
    <section className="bg-white dark:bg-darkColor w-full flex flex-grow flex-col pt-32 items-center">
      <img
        src={APP_IMAGES.WAIT_REQUEST.image}
        alt={APP_IMAGES.WAIT_REQUEST.alt}
        className="w-[430px] object-contain"
      />

      <ChacaSimpleButton
        color="secondary"
        size="extra-large"
        text={MESSAGE}
        className="mt-10"
        onClick={handleCreateDataset}
      />
    </section>
  )
}
