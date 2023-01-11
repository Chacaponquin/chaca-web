import { useContext, useMemo } from "react"
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES"
import { DatasetsContext } from "../../../../../../shared/context/DatasetsContext"
import { DatasetField, RefDataType } from "../../../../../../shared/interfaces/datasets.interface"
import DatasetToRef from "./components/DatasetToRef"
import NoFieldsToRef from "./components/NoFieldsToRef"

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
    <div className='flex w-full px-3'>
      {toRef.length > 0 ? (
        <div className='grid w-full gap-x-5 gap-y-4 grid-cols-1'>
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
