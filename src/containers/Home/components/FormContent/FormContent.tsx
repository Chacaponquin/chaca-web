import { useContext, Fragment } from 'react'
import FieldInfoHeader from './components/FieldInfoHeader'
import SidePanel from './components/SidePanel/SidePanel'
import { DATA_TYPES } from '../../../../shared/constant/DATA_TYPES'
import {
  CustomDataType,
  DatasetField,
  RefDataType,
  SingleValueDataType,
} from '../../../../shared/interfaces/datasets.interface'
import { DatasetsContext } from '../../../../shared/context/DatasetsContext'
import CustomForm from './components/CustomForm/CustomForm'
import RefForm from './components/RefForm/RefForm'
import SingleValueForm from './components/SingleValueForm/SingleValueForm'
import DataTypeSelect from './components/DataTypeSelect/DataTypeSelect'
import { ModalProps } from '../../interfaces/modal.interface'

const FormContent = ({ handleOpenModal }: { handleOpenModal: (props: ModalProps) => void }) => {
  const { selectField } = useContext(DatasetsContext)

  return (
    <div className='flex flex-col w-full h-screen'>
      {selectField !== null && (
        <FieldInfoHeader handleOpenModal={handleOpenModal} selectField={selectField} />
      )}

      <div className='w-full flex form-content'>
        <div className='w-full h-full'>
          <div className='gap-2 overflow-y-auto h-full bg-white w-full flex flex-col'>
            {selectField === null ? (
              <NoSelectField />
            ) : (
              <Fragment>
                <DataTypeSelect />

                {selectField.info.dataType.type === DATA_TYPES.SINGLE_VALUE && (
                  <SingleValueForm
                    field={selectField.getNodeObject() as DatasetField<SingleValueDataType>}
                  />
                )}
                {selectField.info.dataType.type === DATA_TYPES.CUSTOM && (
                  <CustomForm field={selectField.getNodeObject() as DatasetField<CustomDataType>} />
                )}
                {selectField.info.dataType.type === DATA_TYPES.REF && (
                  <RefForm field={selectField.getNodeObject() as DatasetField<RefDataType>} />
                )}
              </Fragment>
            )}
          </div>
        </div>

        {selectField && <SidePanel field={selectField} />}
      </div>
    </div>
  )
}

const NoSelectField = () => {
  return <div className='flex items-center justify-center h-full'>No selected field</div>
}

export default FormContent
