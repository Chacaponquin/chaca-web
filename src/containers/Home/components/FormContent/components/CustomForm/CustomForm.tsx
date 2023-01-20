import Editor from "@monaco-editor/react"
import { CustomDataType, DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { LoaderContainer } from "@modules/shared/components/Loader"
import { datasetServices } from "@modules/datasets/services"

const CustomForm = ({ field }: { field: DatasetField<CustomDataType> }) => {
  const { updateCustomField } = datasetServices()

  const handleChange = (c: string | undefined) => {
    updateCustomField(field.id, c || field.dataType.code)
  }

  return (
    <div className='w-full flex py-1'>
      <Editor
        height={"550px"}
        options={{
          minimap: { enabled: false },
          fontSize: 15,
          glyphMargin: false,
          folding: false,
        }}
        width={"100%"}
        onChange={handleChange}
        className='code-container w-full'
        language='javascript'
        defaultValue={field.dataType.code}
        loading={<LoaderContainer className={"w-[100px] esm:w-[60px]"} loading={true} />}
      />
    </div>
  )
}

export default CustomForm
