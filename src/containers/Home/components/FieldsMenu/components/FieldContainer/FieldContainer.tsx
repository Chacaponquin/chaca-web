import { Fragment } from "react"
import { ArrowRight } from "@modules/app/modules/icon/components"
import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { FieldName, FieldOptions, Point } from "./components"
import { useFieldContainer } from "./hooks"

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
    <section className='flex flex-col w-full' onClick={handleSelect}>
      <div className='flex items-center justify-between' style={{ paddingLeft: `${margin}px` }}>
        <div className={divClass}>
          <div className='flex items-center'>
            {field.dataType.type === DATA_TYPES.MIXED ? (
              <button
                style={{
                  transform: subFieldsOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
                onClick={handleInteractSubFields}
              >
                <ArrowRight size={19} />
              </button>
            ) : (
              <Point />
            )}

            <FieldName name={field.name} />
          </div>

          <FieldOptions
            field={field}
            handleInteractOpenMenu={handleInteractOpenMenu}
            openMenu={openMenu}
          />
        </div>
      </div>

      {field.dataType.type === DATA_TYPES.MIXED && subFieldsOpen && (
        <Fragment>
          {field.dataType.object.map((s) => (
            <FieldContainer field={s} margin={margin + 12} key={s.id} />
          ))}
        </Fragment>
      )}
    </section>
  )
}

export default FieldContainer
