import { DatasetField, SingleValueDataType } from "@shared/interfaces/datasets.interface"
import { OptionsContainer, SchemaSelect } from "./components"
import { useUtils } from "@containers/Home/hooks/useUtils"

const SingleValueForm = ({ field }: { field: DatasetField<SingleValueDataType> }) => {
  const { findParent } = useUtils()

  return (
    <div className='flex w-full h-full flex-col bg-white gap-3'>
      <SchemaSelect field={field} />
      <OptionsContainer
        options={findParent(field.dataType.fieldType.parent).options}
        field={field}
      />
    </div>
  )
}

export default SingleValueForm
