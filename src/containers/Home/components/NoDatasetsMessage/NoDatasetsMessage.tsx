import { ChacaSimpleButton } from "@form/components"
import { Image } from "@modules/app/components"
import { APP_IMAGES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleCreateDataset: () => void
}

export default function NoDatasetsMessage({ handleCreateDataset }: Props) {
  const { MESSAGE, WELCOME_MESSAGE } = useTranslation({
    MESSAGE: { en: "Create Dataset", es: "Crear Dataset" },
    WELCOME_MESSAGE: {
      en: "Create your first dataset and see all the actions you can perform with its fields",
      es: "Crea tu primer dataset y mira todas las acciones que puedes realizar con sus campos",
    },
  })

  return (
    <section className="bg-white dark:bg-scale-4 w-full flex flex-grow flex-col pt-24 items-center px-20 esm:px-8">
      <Image image={APP_IMAGES.WELCOME} className="object-contain w-[460px]" />

      <p className="text-xl mt-8 text-black dark:text-white text-center">{WELCOME_MESSAGE}</p>

      <ChacaSimpleButton
        color="secondary"
        size="extra-large"
        text={MESSAGE}
        className="mt-6"
        onClick={handleCreateDataset}
        rounded
        id="create-first-dataset-button"
      />
    </section>
  )
}
