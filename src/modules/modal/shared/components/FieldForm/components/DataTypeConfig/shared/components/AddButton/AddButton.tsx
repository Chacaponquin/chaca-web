import { ChacaSimpleButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleClick(): void
}

export default function AddButton({ handleClick }: Props) {
  const { ADD } = useTranslation({
    ADD: { en: "Add value", es: "Añadir" },
  })

  return (
    <div className="flex justify-start mt-1">
      <ChacaSimpleButton
        text={ADD}
        color="cancel"
        size="base"
        onClick={handleClick}
        disabled={false}
        type="button"
      />
    </div>
  )
}
