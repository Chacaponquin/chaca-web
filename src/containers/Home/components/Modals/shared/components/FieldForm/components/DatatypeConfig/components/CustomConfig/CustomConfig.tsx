import { ChacaButton } from "@form/components"
import { Edit } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useCode } from "@modules/modal/hooks"
import { UpdateCustomProps } from "@containers/Home/components/Modals/shared/domain/field"
import { FormSection } from "@containers/Home/components/Modals/shared/shared/components"

interface Props {
  code: string
  handleUpdateCustomField(p: UpdateCustomProps): void
}

export default function CustomConfig({ code, handleUpdateCustomField }: Props) {
  const { BUTTON, FUNCTION } = useTranslation({
    FUNCTION: { en: "Function", es: "Función" },
    BUTTON: { en: "Edit code", es: "Editar código" },
  })

  const { handleOpen } = useCode()

  function handleClick() {
    handleOpen({
      code: code,
      handleChange: (c) => {
        handleUpdateCustomField({ code: c })
      },
      language: "javascript",
    })
  }

  return (
    <FormSection labelText={FUNCTION} vertical={false} className="mb-5">
      <ChacaButton
        icon={Edit}
        type="button"
        color="cancel"
        size="sm"
        text={BUTTON}
        disabled={false}
        onClick={handleClick}
      />
    </FormSection>
  )
}
