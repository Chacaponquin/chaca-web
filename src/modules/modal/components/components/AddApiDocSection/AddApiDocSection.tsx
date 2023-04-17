import { ModalAdminAddApiDocSection } from "@modules/modal/interfaces/modal.interface"
import { ModalButtons, ModalTitle } from "../../shared/components"
import { useState, useContext } from "react"
import { CreateApiDocDTO } from "@modules/admin/api/dto/apiDoc.dto"
import { ChacaTextInput } from "@form/components"
import { LANGUAGES_ARRAY } from "@modules/shared/modules/appConfig/constants/LANGUAGE"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { ModalContext } from "@modules/modal/context"
import { LanguageConfig } from "@modules/shared/modules/appConfig/interfaces/language.interface"

export default function AddApiDocSection({ handleAddSection }: ModalAdminAddApiDocSection) {
  const { handleCloseModal } = useContext(ModalContext)

  const [newSectionForm, setNewSectionForm] = useState<CreateApiDocDTO>({
    sectionTitle: { en: "", es: "" },
  })

  const { TITLE_TEXT, CREATE_SECTION_TEXT } = useLanguage({
    TITLE_TEXT: { en: "Title", es: "Título" },
    CREATE_SECTION_TEXT: { en: "Create Section", es: "Añadir Sección" },
  })

  const handleChange = (key: keyof LanguageConfig, value: string) => {
    setNewSectionForm({
      ...newSectionForm,
      sectionTitle: { ...newSectionForm.sectionTitle, [key]: value },
    })
  }

  const handleSubmit = () => {
    handleAddSection(newSectionForm)
    handleCloseModal()
  }

  return (
    <div className='w-full flex flex-col'>
      <ModalTitle titleText='Add Api Doc Section' />

      <div className='flex w-full flex-col gap-3'>
        {LANGUAGES_ARRAY.map((l, index) => {
          const lan = l as keyof LanguageConfig

          return (
            <div key={index} className='flex items-center gap-3'>
              <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
                {`${TITLE_TEXT} (${lan})`}:
              </label>
              <ChacaTextInput
                onChange={(v) => handleChange(lan, v)}
                size='full'
                placeholder={`Section Title (${lan})`}
                value={newSectionForm.sectionTitle[lan]}
              />
            </div>
          )
        })}
      </div>

      <ModalButtons handleNext={handleSubmit} nextText={CREATE_SECTION_TEXT} type='edit' />
    </div>
  )
}
