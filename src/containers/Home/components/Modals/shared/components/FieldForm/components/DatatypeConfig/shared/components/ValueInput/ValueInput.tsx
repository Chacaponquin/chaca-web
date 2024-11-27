import { ChacaTextInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ARRAY_VALUE_TYPE } from "@modules/dataset/domain/constants"

interface Props {
  value: string
  handleChange(v: string): void
  handleClick(): void
  valuesLength: number
  type: ARRAY_VALUE_TYPE
}

export default function ValueInput({
  handleChange,
  handleClick,
  value,
  valuesLength,
  type,
}: Props) {
  const { NEW_VALUE } = useTranslation({ NEW_VALUE: { en: "New value", es: "Valor" } })

  function onClick() {
    if (type === ARRAY_VALUE_TYPE.JSON || type === ARRAY_VALUE_TYPE.FUNCTION) {
      handleClick()
    }
  }

  return (
    <div className="flex w-full">
      <ChacaTextInput
        value={value}
        disabled={false}
        name={`new-value-${valuesLength}`}
        size="base"
        type="text"
        onChange={handleChange}
        placeholder={NEW_VALUE}
        onClick={onClick}
      />
    </div>
  )
}
