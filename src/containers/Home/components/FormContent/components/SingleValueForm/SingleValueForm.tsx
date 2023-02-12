import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { schemasServices } from "@modules/schemas/services"
import { OptionsContainer, SchemaSelect } from "./components"

const SingleValueForm = ({ field }: { field: DatasetField<SingleValueDataType> }) => {
  const { findParentOptions } = schemasServices()

  return (
    <div className='flex w-full h-full flex-col bg-white gap-3 mt-4'>
      <SchemaSelect field={field} />
      <OptionsContainer
        options={findParentOptions(field.dataType.fieldType.parent)}
        field={field}
      />
    </div>
  )
}

export default SingleValueForm
