import { useContext } from "react"
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES"
import {
  DatasetField,
  FieldDataType,
  RefDataType,
} from "../../../../../../../shared/interfaces/datasets.interface"
import { v4 as uuid } from "uuid"
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext"
import { DATASETS_ACTIONS } from "../../../../../constants/ACTION_TYPES"
import ChacaRadioButton from "../../../../../../../shared/components/ChacaRadioButton/ChacaRadioButton"

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
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext)

  return (
    <div className='py-1 flex flex-col px-4 items-center w-full'>
      <div className='flex items-center gap-3 w-full' style={{ paddingLeft: `${margin}px` }}>
        <ChacaRadioButton
          value={selectField.dataType.ref.at(-1) === field.id}
          onChange={(e) => {
            datasetDispatch({
              type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
              payload: {
                datasetID: selectedDataset.id,
                fieldID: selectField.id,
                dataType: {
                  type: DATA_TYPES.REF,
                  ref: [...location, field.id],
                },
              },
            })
          }}
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
