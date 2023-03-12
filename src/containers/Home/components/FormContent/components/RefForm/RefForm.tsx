import { useContext, useMemo } from "react"
import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetField, RefDataType } from "@modules/datasets/interfaces/datasets.interface"
import { DatasetToRef, NoFieldsToRef } from "./components"

const RefForm = ({ field }: { field: DatasetField<RefDataType> }) => {
  const { datasets, selectedDataset } = useContext(DatasetsContext)

  const toRef = useMemo(() => {
    return datasets.filter((d) => {
      let availible = true

      if (d.id === selectedDataset.id) availible = false
      else {
        const fieldsAvailable = d.fields.filter((f) => {
          return f.dataType.type !== DATA_TYPES.REF && f.name && !f.isArray
        })

        if (fieldsAvailable.length === 0) availible = false
      }

      return availible
    })
  }, [datasets, selectedDataset.id])

  return (
    <div className='flex justify-center w-full px-3 pt-4'>
      {toRef.length > 0 ? (
        <div className='w-full grid grid-cols-2 gap-4'>
          {toRef.map((d) => (
            <DatasetToRef key={d.id} dataset={d} selectField={field} />
          ))}
        </div>
      ) : (
        <NoFieldsToRef />
      )}
    </div>
  )
}

export default RefForm
