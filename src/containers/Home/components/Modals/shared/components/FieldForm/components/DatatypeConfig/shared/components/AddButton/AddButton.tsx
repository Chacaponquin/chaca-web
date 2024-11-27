import { ChacaButton } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  handleClick(): void
}

export default function AddButton({ handleClick }: Props) {
  const { ADD } = useTranslation({
    ADD: { en: "Add value", es: "Añadir" },
  })

  return (
    <div className="flex justify-end mt-0.5">
      <ChacaButton
        text={ADD}
        color="cancel"
        size="sm"
        onClick={handleClick}
        disabled={false}
        type="button"
      />
    </div>
  )
}
