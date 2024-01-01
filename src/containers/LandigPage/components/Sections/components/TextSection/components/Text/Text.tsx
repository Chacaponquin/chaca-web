import { useTranslation } from "@modules/app/modules/language/hooks"

export default function Text() {
  const { TEXT } = useTranslation({
    TEXT: {
      en: "",
      es: "Si no deseas crear tus datos con Javascript puedes utilizar nuestra herramienta online para tener una visualización másreal del proceso.",
    },
  })

  return <p className="text-scale-11 text-xl mt-4 leading-9 esm:text-lg">{TEXT}</p>
}
