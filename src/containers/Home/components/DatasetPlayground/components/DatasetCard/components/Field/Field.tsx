import { Field as FieldNode, MixedNode } from "@modules/datasets/domain/core"
import { Connect, FieldKeyIcon, FieldName, FieldType } from "./components"
import { Position } from "reactflow"
import { Fragment } from "react"
import { useField } from "./hooks"

interface Props {
  field: FieldNode
  datasetHasKeys: boolean
  margin: number
  datasetId: string
  parentfieldId: string
}

export default function Field({ field, datasetHasKeys, margin, datasetId, parentfieldId }: Props) {
  const { handleClick, type } = useField({
    field: field,
    parentfieldId: parentfieldId,
    datasetId: datasetId,
  })

  return (
    <Fragment>
      <div className="flex items-center relative w-full justify-between">
        <Connect id={field.id} position={Position.Left} type="target" />

        <div
          className="flex items-center w-full py-1.5 px-2 gap-x-3 hover:bg-scale-5 rounded"
          id={field.id}
          onClick={handleClick}
        >
          {datasetHasKeys && <FieldKeyIcon isKey={field.isKey} />}

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

      {field instanceof MixedNode &&
        field.nodes.map((f) => (
          <Field
            margin={margin + 20}
            datasetId={datasetId}
            parentfieldId={field.id}
            datasetHasKeys={datasetHasKeys}
            field={f}
            key={f.id}
          />
        ))}
    </Fragment>
  )
}
