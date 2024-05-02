import { useValuesForm } from "./hooks"
import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import ValueInput from "../ValueInput/ValueInput"
import DeleteButton from "../DeleteButton/DeleteButton"
import SelectType from "../SelectType/SelectType"
import AddButton from "../AddButton/AddButton"
import { Fragment } from "react"
import { Label } from "@modules/modal/shared/shared/components"

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
      {values.map((value, index) => (
        <div className="grid grid-cols-2 gap-x-1 w-full" key={index}>
          <Label htmlFor="" text="Valor" />
          <Label htmlFor="" text="Tipo de dato" />

          <Fragment>
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
        </div>
      ))}

      <AddButton handleClick={handleAdd} />
    </div>
  )
}
