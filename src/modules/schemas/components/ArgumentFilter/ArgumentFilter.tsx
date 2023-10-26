import { useMemo, Fragment } from "react"
import { Calendar } from "primereact/calendar"
import { InputSwitch } from "primereact/inputswitch"
import { Argument } from "@modules/schemas/interfaces/argument"
import { ARGUMENT_TYPE } from "@modules/schemas/constants"
import { ChacaTextInput, ChacaSelect, ChacaNumberInput } from "@form/components"

const ArgumentFilter = ({
  arg,
  value,
  handleChangeArgumentValue,
}: {
  arg: Argument
  value: unknown
  handleChangeArgumentValue: (v: unknown) => void
}) => {
  const filterArgument = useMemo(() => {
    const textClass = "text-sm"

    switch (arg.inputType) {
      case ARGUMENT_TYPE.SELECT: {
        const options = arg.selectValues as string[]

        return (
          <ChacaSelect
            options={options.map((o) => ({ label: o, value: o }))}
            labelKey="label"
            placeholder={`Select ${arg.argument}`}
            onChange={(value) => {
              handleChangeArgumentValue(value)
            }}
            value={value}
            dimension="small"
            valueKey="value"
          />
        )
      }
      case ARGUMENT_TYPE.NUMBER: {
        return (
          <ChacaNumberInput
            step={1}
            onChange={(v) => {
              handleChangeArgumentValue(v)
            }}
            value={value as number}
            className={textClass}
          />
        )
      }

      case ARGUMENT_TYPE.FLOAT: {
        return (
          <ChacaNumberInput
            step={0.1}
            onChange={(v) => {
              handleChangeArgumentValue(v)
            }}
            className={textClass}
            value={value as number}
          />
        )
      }

      case ARGUMENT_TYPE.BOOLEAN: {
        return <InputSwitch onChange={(e) => handleChangeArgumentValue(e.value)} checked={value} />
      }

      case ARGUMENT_TYPE.DATE: {
        return (
          <Calendar
            dateFormat="dd/mm/yy"
            value={value as Date}
            onChange={(e) => handleChangeArgumentValue(e.value as Date)}
            className={textClass}
          />
        )
      }

      case ARGUMENT_TYPE.TEXT: {
        return (
          <ChacaTextInput
            dimension="small"
            onChange={(value) => handleChangeArgumentValue(value)}
            placeholder={arg.argument}
            value={value as string}
            size={"full"}
          />
        )
      }

      default:
        return <Fragment></Fragment>
    }
  }, [arg, handleChangeArgumentValue, value])

  return <Fragment>{filterArgument}</Fragment>
}

export default ArgumentFilter
