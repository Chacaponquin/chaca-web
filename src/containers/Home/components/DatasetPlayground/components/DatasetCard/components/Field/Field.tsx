import { Field as FieldNode } from "@modules/datasets/domain/tree"
import { Connect, FieldKeyIcon, FieldName, FieldType } from "./components"
import { useSchemas } from "@modules/schemas/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { Position } from "reactflow"
import { useMemo } from "react"

interface Props {
  field: FieldNode
  datasetHasKeys: boolean
}

export default function Field({ field, datasetHasKeys }: Props) {
  const { findParent, findType, schemas } = useSchemas()
  const { searchRefField } = useDatasets()

  const type = useMemo(() => {
    if (schemas.length) {
      const value = field.stringInf({
        findOption: findType,
        findParent: findParent,
        searchRefField: searchRefField,
      })

      return value
    } else {
      return ""
    }
  }, [findType, findParent])

  return (
    <div className="flex items-center relative justify-between">
      <Connect id={field.id} position={Position.Left} type="target" />

      <div
        className="flex text-base items-center w-full gap-x-6 py-2 px-5 justify-between"
        id={field.id}
      >
        <section className="flex items-center gap-x-3">
          {datasetHasKeys && <FieldKeyIcon isKey={field.isKey} />}
          <FieldName name={field.name} />
        </section>

        <FieldType type={type} />
      </div>

      <Connect id={field.id} position={Position.Right} type="source" />
    </div>
  )
}
