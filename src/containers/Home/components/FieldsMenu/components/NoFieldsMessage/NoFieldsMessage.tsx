import { MODAL_ACTIONS } from "@modules/modal/constants/MODAL_ACTIONS"
import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { ChacaSimpleButton } from "@form/components"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { ModalContext } from "@modules/modal/context"
import { APP_IMAGES } from "@modules/shared/constant"

const NoFieldsMessage = () => {
  const { selectedDataset } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

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
      <img
        src={APP_IMAGES.EMPTY_FIELDS.image}
        alt={APP_IMAGES.EMPTY_FIELDS.alt}
        className='w-[200px] my-5'
      />
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
