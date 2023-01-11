import { Argument } from "../../../../../../../shared/interfaces/options.interface"
import { useContext } from "react"
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext"
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../../shared/interfaces/datasets.interface"
import { DATASETS_ACTIONS } from "../../../../../constants/ACTION_TYPES"
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES"
import ArgumentFilter from "../../../../../../../shared/components/ArgumentFilter/ArgumentFilter"
import { v4 as uuid } from "uuid"

const OptionArguments = ({
  args,
  field,
}: {
  args: Argument[]
  field: DatasetField<SingleValueDataType>
}) => {
  return (
    <div className='grid grid-cols-2 gap-x-5 w-full px-5 mt-1'>
      {args.map((a) => (
        <FieldArgumentContainer key={uuid()} arg={a} field={field} />
      ))}
    </div>
  )
}

const FieldArgumentContainer = ({
  arg,
  field,
}: {
  arg: Argument
  field: DatasetField<SingleValueDataType>
}) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext)

  const handleChangeArgumentValue = (value: unknown) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            ...field.dataType.fieldType,
            args: { ...field.dataType.fieldType.args, [arg.argument]: value },
          },
        },
      },
    })
  }

  return (
    <div className='flex py-1 gap-1 items-center'>
      <p className='mb-0 text-base'>{arg.argument}: </p>
      <ArgumentFilter
        arg={arg}
        handleChangeArgumentValue={handleChangeArgumentValue}
        value={field.dataType.fieldType.args[arg.argument]}
      />
    </div>
  )
}

export default OptionArguments
