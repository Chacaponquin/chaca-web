import { useContext } from "react"
import { DATA_TYPES } from "@shared/constant"
import { AppConfigContext, DatasetsContext } from "@shared/context"
import { DatasetField, SingleValueDataType } from "@shared/interfaces/datasets.interface"
import { DATASETS_ACTIONS } from "@containers/Home/constants"
import { useUtils } from "@containers/Home/hooks"
import { ChacaSelect } from "@form"
import { useLanguage } from "@shared/hooks"

const SchemaSelect = ({ field }: { field: DatasetField<SingleValueDataType> }) => {
  const { schemas } = useContext(AppConfigContext)
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext)
  const { findParent } = useUtils()
  const { SCHEMA_TEXT } = useLanguage({ SCHEMA_TEXT: { en: "Schema", es: "Esquema" } })

  const handleSelectSchema = (parent: string) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            parent: parent,
            type: findParent(parent).options[0].name,
          },
        },
      },
    })
  }

  return (
    <div className='flex px-5'>
      <p className='mb-0 font-fontBold text-xl mr-4'>{SCHEMA_TEXT}:</p>
      <ChacaSelect
        value={field.dataType.fieldType.parent}
        onChange={(value) => handleSelectSchema(value as string)}
        placeholder={"Select a Schema"}
        options={schemas}
        labelKey='parent'
        valueKey='parent'
        size={200}
      />
    </div>
  )
}

export default SchemaSelect
