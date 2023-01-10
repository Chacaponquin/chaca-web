import { Dropdown } from "primereact/dropdown"
import { useContext } from "react"
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES"
import { AppConfigContext } from "../../../../../../../shared/context/AppConfigContext"
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext"
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../../shared/interfaces/datasets.interface"
import { DATASETS_ACTIONS } from "../../../../../constants/ACTION_TYPES"
import { useUtils } from "../../../../../hooks/useUtils"

const SchemaSelect = ({ field }: { field: DatasetField<SingleValueDataType> }) => {
  const { schemas } = useContext(AppConfigContext)
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext)
  const { findParent } = useUtils()

  return (
    <div className='flex px-5'>
      <p className='mb-0 font-fontBold text-xl mr-4'>Schema:</p>
      <Dropdown
        className='w-[200px]'
        optionLabel='parent'
        options={schemas}
        placeholder={"Select a Schema"}
        optionValue='parent'
        value={field.dataType.fieldType.parent}
        onChange={(e) => {
          datasetDispatch({
            type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
            payload: {
              datasetID: selectedDataset.id,
              fieldID: field.id,
              dataType: {
                type: DATA_TYPES.SINGLE_VALUE,
                fieldType: {
                  args: {},
                  parent: e.value,
                  type: findParent(e.value)!.options[0].name,
                },
              },
            },
          })
        }}
      />
    </div>
  )
}

export default SchemaSelect
