import { Field as FieldNode, MixedNode } from "@modules/datasets/domain/tree"
import { Connect, FieldKeyIcon, FieldName, FieldType } from "./components"
import { useSchemas } from "@modules/schemas/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { Position } from "reactflow"
import { Fragment, useMemo } from "react"

interface Props {
  field: FieldNode
  datasetHasKeys: boolean
  margin: number
}

export default function Field({ field, datasetHasKeys, margin }: Props) {
  const { findParent, findType } = useSchemas()
  const { searchRefField } = useDatasets()

  const type = useMemo(() => {
    const value = field.stringInf({
      findOption: findType,
      findParent: findParent,
      searchRefField: searchRefField,
    })

    return value
  }, [findType, findParent, field])

  return (
    <Fragment>
      <div className="flex items-center relative w-full justify-between">
        <Connect id={field.id} position={Position.Left} type="target" />

        <div className="flex text-base items-center w-full py-2 px-5 gap-x-3" id={field.id}>
          {datasetHasKeys && <FieldKeyIcon isKey={field.isKey} />}

          <div
            className="flex items-center w-full justify-between gap-x-12"
            style={{ paddingLeft: `${margin}px` }}
          >
            <section className="flex items-center ">
              <FieldName name={field.name} />
            </section>

            <FieldType type={type} />
          </div>
        </div>

        <Connect id={field.id} position={Position.Right} type="source" />
      </div>

      {field instanceof MixedNode && (
        <Fragment>
          {field.nodes.map((f) => (
            <Field margin={margin + 20} datasetHasKeys={datasetHasKeys} field={f} key={f.id} />
          ))}
        </Fragment>
      )}
    </Fragment>
  )
}
