import { ChacaButton } from "@form/components"
import { Send } from "@modules/app/modules/icon/components"

interface Props {
  buttonText: string
  loading: boolean
}

export default function ButtonSection({ buttonText, loading }: Props) {
  return (
    <section className="flex justify-end">
      <ChacaButton
        color="primary"
        icon={Send}
        size="lg"
        text={buttonText}
        type="submit"
        disabled={loading}
      />
    </section>
  )
}
