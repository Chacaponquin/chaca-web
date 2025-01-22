import { Connect, FieldKeyIcon, FieldName, FieldType } from "./components"
import { Position } from "reactflow"
import { Fragment } from "react"
import { useField } from "./hooks"
import { Field as FieldNode, MixedNode } from "@modules/dataset/domain/core/field"

interface Props {
  field: FieldNode
  schemaHasKeys: boolean
  margin: number
  schemaId: string
  parentfieldId: string
}

export default function Field({ field, schemaHasKeys, margin, schemaId, parentfieldId }: Props) {
  const { handleClick, type } = useField({
    field: field,
    parentfieldId: parentfieldId,
    schemaId: schemaId,
  })

  return (
    <Fragment>
      <div className="flex items-center relative w-full justify-between">
        <Connect id={field.id} position={Position.Left} type="target" />

        <div className="flex w-full px-2 items-center">
          <div
            className="flex items-center w-full py-1.5 px-2 gap-x-2 hover:bg-scale-5 rounded"
            id={field.id}
            onClick={handleClick}
          >
            {schemaHasKeys && <FieldKeyIcon isKey={field.isKey} />}

            <div
              className="flex items-center w-full justify-between gap-x-8 cursor-pointer"
              style={{ paddingLeft: `${margin}px` }}
            >
              <FieldName name={field.name} />
              <FieldType type={type} />
            </div>
          </div>

          <Connect id={field.id} position={Position.Right} type="source" />
        </div>
      </div>

      {field instanceof MixedNode &&
        field.nodes.map((f) => (
          <Field
            margin={margin + 20}
            schemaId={schemaId}
            parentfieldId={field.id}
            schemaHasKeys={schemaHasKeys}
            field={f}
            key={f.id}
          />
        ))}
    </Fragment>
  )
}
