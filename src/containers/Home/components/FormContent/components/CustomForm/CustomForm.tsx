import { CustomDataType, DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"
import CodeEditor from "@modules/shared/components/CodeEditor/CodeEditor"

const CustomForm = ({ field }: { field: DatasetField<CustomDataType> }) => {
  const { updateCustomField } = datasetServices()

  const handleChange = (c: string) => {
    updateCustomField(field.id, c)
  }

  return (
    <div className='w-full flex'>
      <CodeEditor
        onChange={handleChange}
        fontSize={15}
        height={600}
        code={field.dataType.code}
        language='javascript'
      />
    </div>
  )
}

export default CustomForm
