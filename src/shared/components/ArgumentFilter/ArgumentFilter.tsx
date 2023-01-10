import { useMemo, Fragment } from "react"
import { Calendar } from "primereact/calendar"
import { InputText } from "primereact/inputtext"
import { InputSwitch } from "primereact/inputswitch"
import { FieldArgument } from "../../interfaces/datasets.interface"
import { Argument } from "../../interfaces/options.interface"
import { ARGUMENT_TYPE } from "../../constant/ARGUMENT_TYPE"
import { InputNumber } from "primereact/inputnumber"
import { Dropdown } from "primereact/dropdown"
import { DataTransform } from "../../helpers/DataTransform"

const ArgumentFilter = ({
  arg,
  value,
  handleChangeArgumentValue,
}: {
  arg: Argument
  value: FieldArgument
  handleChangeArgumentValue: (v: FieldArgument) => void
}) => {
  const filterArgument = useMemo(() => {
    const textClass = "text-sm"

    switch (arg.inputType) {
      case ARGUMENT_TYPE.SELECT: {
        return (
          <Dropdown
            options={arg.selectValues as string[]}
            placeholder={`Select ${DataTransform.titlePipe(arg.argument)}`}
            onChange={(e) => {
              handleChangeArgumentValue(e.value)
            }}
            className={textClass}
            value={value}
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
          <InputText
            value={value as string}
            onChange={(e) => handleChangeArgumentValue(e.target.value)}
            className={textClass}
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
