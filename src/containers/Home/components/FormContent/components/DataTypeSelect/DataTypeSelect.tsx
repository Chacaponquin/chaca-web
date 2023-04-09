import { Fragment } from "react"
import { v4 as uuid } from "uuid"
import { FieldNode } from "@modules/shared/classes"
import { useDataTypeSelect } from "./hooks"

const DataTypeSelect = ({ selectField }: { selectField: FieldNode }) => {
  const { barClass, handleChangeDataType, textClass, DATA_TYPES_OPTIONS } =
    useDataTypeSelect(selectField)

  return (
    <div className='bg-slate-100 flex w-full h-max justify-center gap-x-1'>
      {DATA_TYPES_OPTIONS.map((el) => (
        <Fragment key={uuid()}>
          <button
            className='px-3 pt-2 font-fontBold uppercase flex flex-col w-[200px] cursor-pointer whitespace-nowrap'
            onClick={() => handleChangeDataType(el.dataType)}
          >
            <p
              className={textClass(
                selectField ? selectField.info.dataType.type === el.dataType : false,
              )}
            >
              {el.title}
            </p>
            <div
              className={barClass(
                selectField ? selectField.info.dataType.type === el.dataType : false,
              )}
            ></div>
          </button>
        </Fragment>
      ))}
    </div>
  )
}

export default DataTypeSelect
