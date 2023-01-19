import { useContext } from "react"
import {
  CustomDataType,
  DatasetField,
  RefDataType,
  SingleValueDataType,
} from "@modules/datasets/interfaces/datasets.interface"
import {
  CustomForm,
  DataTypeSelect,
  FieldInfoHeader,
  RefForm,
  SidePanel,
  SingleValueForm,
  NoSelectFieldMessage,
} from "./components"
import { DatasetsContext } from "@modules/datasets/context"
import { DATA_TYPES } from "@modules/schemas/constants"

const FormContent = () => {
  const { selectField } = useContext(DatasetsContext)

  return (
    <div className='flex flex-col w-full h-screen'>
      {selectField !== null && <FieldInfoHeader selectField={selectField} />}

      <div className='w-full flex form-content'>
        <div className='w-full h-full overflow-y-auto flex justify-center'>
          <div className='overflow-y-auto h-full bg-white flex flex-col w-full min-w-[500px]'>
            {selectField === null ? (
              <NoSelectFieldMessage />
            ) : (
              <div className='w-full flex flex-col items-center gap-2'>
                <DataTypeSelect selectField={selectField} />

                <div className='flex flex-col items-center w-full px-12'>
                  {selectField.info.dataType.type === DATA_TYPES.SINGLE_VALUE && (
                    <SingleValueForm
                      field={selectField.getNodeObject() as DatasetField<SingleValueDataType>}
                    />
                  )}
                  {selectField.info.dataType.type === DATA_TYPES.CUSTOM && (
                    <CustomForm
                      field={selectField.getNodeObject() as DatasetField<CustomDataType>}
                    />
                  )}
                  {selectField.info.dataType.type === DATA_TYPES.REF && (
                    <RefForm field={selectField.getNodeObject() as DatasetField<RefDataType>} />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {selectField && <SidePanel selectField={selectField.getNodeObject()} />}
      </div>
    </div>
  )
}

export default FormContent
