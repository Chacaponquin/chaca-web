import { DatasetTree } from "@modules/shared/classes"
import FieldToRef from "../FieldToRef/FieldToRef"
import { DatasetField, RefDataType } from "@modules/datasets/interfaces/datasets.interface"

const DatasetToRef = ({
  dataset,
  selectField,
}: {
  dataset: DatasetTree
  selectField: DatasetField<RefDataType>
}) => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex rounded-sm-tr rounded-sm-tl bg-principalColor text-white w-full px-4 py-1'>
        <p className='text-lg font-fontBold'>{dataset.name}</p>
      </div>

      <div className='flex flex-col rounded-sm-br rounded-sm-bl border-r-2 border-l-2 border-b-2'>
        {dataset.fields.map((f) => (
          <FieldToRef
            key={f.id}
            field={f}
            margin={0}
            location={[dataset.name]}
            selectField={selectField}
          />
        ))}
      </div>
    </div>
  )
}

export default DatasetToRef
