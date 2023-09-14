import { Fragment } from "react"
import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { FieldName, FieldOptions, OpenFieldsButton, Point } from "./components"
import { useFieldContainer } from "./hooks"

const FieldContainer = ({
  margin,
  field,
}: {
  field: DatasetField<FieldDataType>
  margin: number
}) => {
  const { subFieldsOpen, openMenu, handleInteractSubFields, handleInteractOpenMenu } =
    useFieldContainer()

  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center justify-between" style={{ paddingLeft: `${margin}px` }}>
        <div className="w-full flex items-center justify-between py-2.5 transition-all duration-300 px-2">
          <div className="flex items-center">
            {field.dataType.type === DATA_TYPES.MIXED ? (
              <Fragment>
                {field.dataType.object.length === 0 ? (
                  <Point />
                ) : (
                  <OpenFieldsButton onClick={handleInteractSubFields} open={subFieldsOpen} />
                )}
              </Fragment>
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
