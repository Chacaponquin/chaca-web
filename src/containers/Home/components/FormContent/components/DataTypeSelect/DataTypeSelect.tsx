import { Fragment } from "react"
import { DATA_TYPES } from "@modules/schemas/constants"
import { v4 as uuid } from "uuid"
import { FieldNode } from "@modules/shared/classes"
import { useDataTypeSelect } from "./hooks"

const DataTypeSelect = ({ selectField }: { selectField: FieldNode }) => {
  const { barClass, handleChangeDataType, textClass } = useDataTypeSelect(selectField)

  return (
    <div className='bg-slate-100 flex w-full h-max justify-center gap-3'>
      {Object.values(DATA_TYPES)
        .filter((el) => el !== DATA_TYPES.MIXED)
        .map((el) => (
          <Fragment key={uuid()}>
            <button
              className='px-3 pt-2 font-fontBold uppercase flex flex-col w-[150px] cursor-pointer'
              onClick={() => handleChangeDataType(el)}
            >
              <p className={textClass(selectField ? selectField.info.dataType.type === el : false)}>
                {el}
              </p>
              <div
                className={barClass(selectField ? selectField.info.dataType.type === el : false)}
              ></div>
            </button>
          </Fragment>
        ))}
    </div>
  )
}

export default DataTypeSelect
