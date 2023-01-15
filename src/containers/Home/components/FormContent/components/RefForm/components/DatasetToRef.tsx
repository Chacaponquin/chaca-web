import { DatasetTree } from "../../../../../../../shared/helpers/DatasetTree/DatasetTree"
import { v4 as uuid } from "uuid"
import FieldToRef from "./FieldToRef"
import {
  DatasetField,
  RefDataType,
} from "../../../../../../../shared/interfaces/datasets.interface"

const DatasetToRef = ({
  dataset,
  selectField,
}: {
  dataset: DatasetTree
  selectField: DatasetField<RefDataType>
}) => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex rounded-tr rounded-tl bg-principalColor text-white w-full px-4 py-1'>
        <p className='text-lg font-fontBold'>{dataset.name}</p>
      </div>

      <div className='flex flex-col rounded-br rounded-bl border-r-2 border-l-2 border-b-2'>
        {dataset.fields.map((f) => (
          <FieldToRef
            key={uuid()}
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
