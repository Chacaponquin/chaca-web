import { ChacaIconButton } from "@form/components"
import { LoaderContainer } from "@modules/app/components/Loader"
import { Send } from "@modules/app/modules/icon/components"

export default function ButtonSection({
  buttonText,
  loading,
}: {
  buttonText: string
  loading: boolean
}) {
  return (
    <section className="flex justify-end">
      <LoaderContainer loading={loading} size={30} className="px-2 pt-2">
        <ChacaIconButton
          color="primary"
          icon={<Send size={23} />}
          size="extra-large"
          text={buttonText}
          type="submit"
        />
      </LoaderContainer>
    </section>
  )
}
