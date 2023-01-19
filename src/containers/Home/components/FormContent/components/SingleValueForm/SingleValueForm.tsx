import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { schemasServices } from "@modules/schemas/services"
import { OptionsContainer, SchemaSelect } from "./components"

const SingleValueForm = ({ field }: { field: DatasetField<SingleValueDataType> }) => {
  const { findParent } = schemasServices()

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
