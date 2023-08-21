import { Fragment } from "react"
import { ArrowRight, Config } from "@modules/app/modules/icon/components"
import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { FieldConfigMenu } from "./components"
import { useFieldContainer } from "./hooks"

const Point = () => {
  return (
    <div className='from-principalColor to-secondColor bg-gradient-to-tr w-[7px] h-[7px] rounded-full'></div>
  )
}

const FieldContainer = ({
  margin,
  field,
}: {
  field: DatasetField<FieldDataType>
  margin: number
}) => {
  const {
    divClass,
    handleSelect,
    subFieldsOpen,
    openMenu,
    handleInteractSubFields,
    handleInteractOpenMenu,
  } = useFieldContainer(field)

  return (
    <div className='flex flex-col w-full' onClick={handleSelect}>
      <div className={"flex items-center justify-between"} style={{ paddingLeft: `${margin}px` }}>
        <div className={divClass}>
          <div className='flex items-center'>
            {field.dataType.type === DATA_TYPES.MIXED ? (
              <button
                style={{
                  transform: subFieldsOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
                onClick={handleInteractSubFields}
              >
                <ArrowRight size={18} />
              </button>
            ) : (
              <div className='pl-[5px]'>
                <Point />
              </div>
            )}

            <p className='ml-3'>{field.name}</p>
          </div>

          <div className='flex flex-col'>
            <button onClick={handleInteractOpenMenu}>
              <Config size={18} />
              {openMenu && <FieldConfigMenu field={field} />}
            </button>
          </div>
        </div>
      </div>

      {field.dataType.type === DATA_TYPES.MIXED && subFieldsOpen && (
        <Fragment>
          {field.dataType.object.map((s) => (
            <FieldContainer field={s} margin={margin + 12} key={s.id} />
          ))}
        </Fragment>
      )}
    </div>
  )
}

export default FieldContainer
