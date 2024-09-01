import { ChacaButton } from "@form/components"
import { Image } from "@modules/app/components"
import { APP_IMAGES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useDataset } from "@modules/dataset/hooks"

export default function NoSchemasMessage() {
  const { MESSAGE, WELCOME_MESSAGE } = useTranslation({
    MESSAGE: { en: "Create Schema", es: "Crear Schema" },
    WELCOME_MESSAGE: {
      en: "Create your first dataset and see all the actions you can perform with its fields",
      es: "Crea tu primer dataset y mira todas las acciones que puedes realizar con sus campos",
    },
  })
  const { handleAddSchema } = useDataset()

  return (
    <section className="bg-white dark:bg-scale-4 w-full flex flex-grow flex-col pt-24 items-center px-20 esm:px-8">
      <Image image={APP_IMAGES.WELCOME} className="object-contain w-full max-w-[460px]" />

      <p className="text-xl mt-8 text-black dark:text-white text-center mb-6">{WELCOME_MESSAGE}</p>

      <ChacaButton
        color="secondary"
        size="xl"
        text={MESSAGE}
        onClick={handleAddSchema}
        rounded={true}
        id="create-first-dataset-button"
      />
    </section>
  )
}
