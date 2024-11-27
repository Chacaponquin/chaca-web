import { useValuesForm } from "./hooks"
import { ArrayValue } from "@modules/dataset/domain/core/datatype"
import ValueInput from "../ValueInput/ValueInput"
import DeleteButton from "../DeleteButton/DeleteButton"
import SelectType from "../SelectType/SelectType"
import AddButton from "../AddButton/AddButton"
import { Fragment } from "react"
import { Label } from "@containers/Home/components/Modals/shared/shared/components/FormSection/components"

interface Props {
  values: ArrayValue[]
  handleChangeValues(v: ArrayValue[]): void
}

export default function ValuesForm({ values, handleChangeValues }: Props) {
  const {
    handleChangeValue,
    types,
    handleChangeSelectType,
    handleAdd,
    handleDeleteValue,
    handleClick,
  } = useValuesForm({
    values,
    handleChangeValues,
  })

  return (
    <div className="flex flex-col w-full gap-y-1">
      <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 w-full">
        <Label text="Valor" />
        <Label text="Tipo de dato" />

        {values.map((value, index) => (
          <Fragment key={index}>
            <ValueInput
              type={value.type}
              valuesLength={values.length}
              value={value.value}
              handleChange={(v) => handleChangeValue(v, index)}
              handleClick={() => handleClick(index)}
            />

            <div className="flex items-center gap-x-0.5">
              <SelectType
                type={value.type}
                types={types}
                handleChange={(v) => handleChangeSelectType(v, index)}
              />

              <DeleteButton handleClick={() => handleDeleteValue(index)} />
            </div>
          </Fragment>
        ))}
      </div>

      <AddButton handleClick={handleAdd} />
    </div>
  )
}
