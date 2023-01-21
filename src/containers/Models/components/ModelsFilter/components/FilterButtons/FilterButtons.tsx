import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { useLanguage } from "@modules/shared/hooks"

export default function FilterButtons() {
  const { APPLY_TEXT, RESET_TEXT } = useLanguage({
    APPLY_TEXT: { en: "Apply", es: "Buscar" },
    RESET_TEXT: { en: "Reset", es: "Reiniciar" },
  })

  return (
    <div className='w-full flex gap-2 items-center justify-center'>
      <ChacaSimpleButton color='primary' text={APPLY_TEXT} size='medium' />
      <ChacaSimpleButton color='cancel' text={RESET_TEXT} size='medium' />
    </div>
  )
}
