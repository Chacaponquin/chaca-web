import { useMemo, Fragment } from "react"
import { Calendar } from "primereact/calendar"
import { InputSwitch } from "primereact/inputswitch"
import { Argument } from "@shared/interfaces/options.interface"
import { ARGUMENT_TYPE } from "@shared/constant"
import { InputNumber } from "primereact/inputnumber"
import { DataTransform } from "@shared/helpers/DataTransform"
import { ChacaTextInput, ChacaSelect } from "@form"

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
            labelKey='label'
            placeholder={`Select ${DataTransform.titlePipe(arg.argument)}`}
            onChange={(value) => {
              handleChangeArgumentValue(value)
            }}
            value={value}
            dimension='small'
            valueKey='value'
          />
        )
      }
      case ARGUMENT_TYPE.NUMBER: {
        return (
          <InputNumber
            step={1}
            onChange={(e) => {
              handleChangeArgumentValue(e.value || value)
            }}
            value={value as number}
            className={textClass}
          />
        )
      }

      case ARGUMENT_TYPE.FLOAT: {
        return (
          <InputNumber
            step={0.1}
            onChange={(e) => {
              handleChangeArgumentValue(e.value || value)
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
            dateFormat='dd/mm/yy'
            value={value as Date}
            onChange={(e) => handleChangeArgumentValue(e.value as Date)}
            className={textClass}
          />
        )
      }

      case ARGUMENT_TYPE.TEXT: {
        return (
          <ChacaTextInput
            dimension='small'
            onChange={(value) => handleChangeArgumentValue(value)}
            placeholder={DataTransform.titlePipe(arg.argument)}
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
