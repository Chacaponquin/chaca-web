import { useMemo, Fragment } from "react"
import { Calendar } from "primereact/calendar"
import { Argument } from "@modules/schemas/interfaces/argument"
import { ARGUMENT_TYPE } from "@modules/schemas/constants"
import { ChacaTextInput, ChacaSelect, ChacaNumberInput, ChacaSwitchButton } from "@form/components"

interface Props {
  arg: Argument
  value: unknown
  handleChangeArgumentValue(v: unknown): void
}

export default function ArgumentFilter({ arg, value, handleChangeArgumentValue }: Props) {
  const filterArgument = useMemo(() => {
    switch (arg.config.type) {
      case ARGUMENT_TYPE.SELECT: {
        const options = arg.config.values

        return (
          <ChacaSelect
            options={options.map((o) => ({ label: o, value: o }))}
            labelKey="label"
            placeholder={`Select ${arg.argument}`}
            onChange={(value) => {
              handleChangeArgumentValue(value)
            }}
            value={value}
            size="sm"
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
            size="sm"
          />
        )
      }

      case ARGUMENT_TYPE.FLOAT: {
        return (
          <ChacaNumberInput
            step={0.1}
            onChange={(v) => handleChangeArgumentValue(v)}
            size="sm"
            value={value as number}
          />
        )
      }

      case ARGUMENT_TYPE.BOOLEAN: {
        return (
          <ChacaSwitchButton
            value={value as boolean}
            size="sm"
            onChange={handleChangeArgumentValue}
          />
        )
      }

      case ARGUMENT_TYPE.DATE: {
        return (
          <Calendar
            dateFormat="dd/mm/yy"
            value={value as Date}
            onChange={(e) => handleChangeArgumentValue(e.value as Date)}
          />
        )
      }

      case ARGUMENT_TYPE.TEXT: {
        return (
          <ChacaTextInput
            onChange={(value) => handleChangeArgumentValue(value)}
            placeholder={arg.argument}
            value={value as string}
            size="sm"
            disabled={false}
            name={arg.argument}
            type="text"
          />
        )
      }

      default:
        return <Fragment></Fragment>
    }
  }, [arg, handleChangeArgumentValue, value])

  return filterArgument
}
