import { ChacaIconButton } from "@form/components"
import { Send } from "@modules/app/modules/icon/components"

interface Props {
  buttonText: string
  loading: boolean
}

export default function ButtonSection({ buttonText, loading }: Props) {
  return (
    <section className="flex justify-end">
      <ChacaIconButton
        color="primary"
        icon={<Send size={20} />}
        size="lg"
        text={buttonText}
        type="submit"
        disabled={loading}
      />
    </section>
  )
}
