import { ChacaSelect, ChacaSimpleButton, ChacaTextInput } from "@form/components"
import { useValuesForm } from "./hooks"
import { X } from "@modules/app/modules/icon/components"
import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"

interface Props {
  values: ArrayValue[]
  handleChangeValues(v: ArrayValue[]): void
}

export default function ValuesForm({ values, handleChangeValues }: Props) {
  const { ADD, NEW_VALUE } = useTranslation({
    ADD: { en: "Add value", es: "Añadir" },
    NEW_VALUE: { en: "New value", es: "Valor" },
  })

  const {
    handleChangeValue,
    types,
    handleChangeSelectType,
    handleAdd,
    findType,
    handleDeleteValue,
    handleClick,
  } = useValuesForm({
    values,
    handleChangeValues,
  })

  return (
    <div className="flex flex-col w-full gap-y-1">
      {values.map((value, index) => (
        <div className="flex items-center gap-x-1 w-full" key={index}>
          <div className="flex w-full">
            <ChacaTextInput
              value={String(value.value)}
              disabled={false}
              name={`new-value-${values.length + 1}`}
              size="base"
              type="text"
              onChange={(v) => handleChangeValue(v, index)}
              placeholder={NEW_VALUE}
              onClick={value.type === ARRAY_VALUE_TYPE.JSON ? () => handleClick(index) : undefined}
            />
          </div>

          <ChacaSelect
            options={types}
            labelKey="name"
            valueKey="name"
            onChange={(v) => handleChangeSelectType(v as string, index)}
            value={findType(value.type).name}
            size="base"
            placeholder="Type"
          />

          <button
            className="dark:fill-white fill-black ml-2"
            type="button"
            onClick={() => handleDeleteValue(index)}
          >
            <X size={18} />
          </button>
        </div>
      ))}

      <div className="flex justify-start mt-2.5">
        <ChacaSimpleButton
          text={ADD}
          color="cancel"
          size="base"
          onClick={handleAdd}
          disabled={false}
          type="button"
        />
      </div>
    </div>
  )
}
