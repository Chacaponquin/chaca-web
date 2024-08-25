import { Fragment } from "react"
import { FieldName, FieldOptions, OpenFieldsButton, Point } from "./components"
import { useFieldContainer } from "./hooks"
import { Field, MixedNode } from "@modules/datasets/domain/core"

interface Props {
  field: Field
  margin: number
}

export default function FieldContainer({ margin, field }: Props) {
  const { subFieldsOpen, handleInteractSubFields } = useFieldContainer()

  return (
    <section className="flex flex-col w-full">
      <div style={{ paddingLeft: `${margin}px` }}>
        <div className="w-full flex items-center gap-x-4 justify-between py-2 transition-all duration-300 px-2">
          <div className="flex items-center">
            {field instanceof MixedNode ? (
              <Fragment>
                {field.nodes.length === 0 ? (
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

          <FieldOptions field={field} />
        </div>
      </div>

      {field instanceof MixedNode &&
        subFieldsOpen &&
        field.nodes.map((s) => <FieldContainer field={s} margin={margin + 12} key={s.id} />)}
    </section>
  )
}
