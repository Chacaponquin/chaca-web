import { DATA_TYPES } from "@modules/schemas/constants"
import {
  DatasetField,
  FieldDataType,
  RefDataType,
} from "@modules/datasets/interfaces/datasets.interface"
import { v4 as uuid } from "uuid"
import { ChacaRadioButton } from "@form/components"
import { useFieldToRef } from "./hooks"

const FieldToRef = ({
  field,
  margin,
  location,
  selectField,
}: {
  field: DatasetField<FieldDataType>
  margin: number
  location: string[]
  selectField: DatasetField<RefDataType>
}) => {
  const { handleRefField } = useFieldToRef(selectField, location, field)

  return (
    <div className='py-1 flex flex-col px-4 items-center w-full'>
      <div className='flex items-center gap-3 w-full' style={{ paddingLeft: `${margin}px` }}>
        <ChacaRadioButton
          value={selectField.dataType.ref.at(-1) === field.id}
          onChange={() => handleRefField()}
        />

        <p className='mb-0 text-base'>{field.name}</p>
      </div>

      {field.dataType.type === DATA_TYPES.MIXED &&
        field.dataType.object.map((f) => (
          <FieldToRef
            key={uuid()}
            field={f}
            margin={margin + 7}
            location={[...location, f.id]}
            selectField={selectField}
          />
        ))}
    </div>
  )
}

export default FieldToRef
