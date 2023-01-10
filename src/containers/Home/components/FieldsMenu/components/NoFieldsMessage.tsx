import { MODAL_ACTIONS } from "../../../constants/MODAL_ACTIONS"
import { ModalProps } from "../../../interfaces/modal.interface"
import { useContext } from "react"
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext"
import { ChacaSimpleButton } from "../../../../../shared/components/ChacaButton"
import { useLanguage } from "../../../../../shared/hooks"

const NoFieldsMessage = ({ handleOpenModal }: { handleOpenModal: (a: ModalProps) => void }) => {
  const { selectedDataset } = useContext(DatasetsContext)

  const UI_TEXT = useLanguage({
    ADD_FIELD_TEXT: { en: "Add Field", es: "Nuevo Campo" },
    NO_FIELDS_TEXT: { en: "No fields found", es: "No hay campos" },
  })

  const handleNewField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      parentFieldID: selectedDataset.id,
    })
  }

  return (
    <div className='flex justify-center flex-col items-center'>
      <img src='./images/Bored.svg' alt='empty-fields' className='w-[200px] my-5' />
      <p className='text-xl text-slate-500 font-fontBold'>{UI_TEXT.NO_FIELDS_TEXT}</p>

      <ChacaSimpleButton
        onClick={handleNewField}
        text={UI_TEXT.ADD_FIELD_TEXT}
        color='primary'
        size='medium'
        className='mt-2'
      />
    </div>
  )
}

export default NoFieldsMessage
