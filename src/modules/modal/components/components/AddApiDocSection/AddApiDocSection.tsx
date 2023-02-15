import { ModalAdminAddApiDocSection } from "@modules/modal/interfaces/modal.interface"
import { ModalButtons, ModalTitle } from "../../shared/components"
import { useState, useContext } from "react"
import { CreateApiDocDTO } from "@modules/admin/api/dto/apiDoc.dto"
import { ChacaSelect, ChacaTextInput } from "@form"
import { LANGUAGES_ARRAY } from "@modules/shared/constant/LANGUAGE"
import { useLanguage } from "@modules/shared/hooks"
import { ModalContext } from "@modules/modal/context"

export default function AddApiDocSection({ handleAddSection }: ModalAdminAddApiDocSection) {
  const { handleCloseModal } = useContext(ModalContext)

  const [newSectionForm, setNewSectionForm] = useState<CreateApiDocDTO>({
    sectionTitle: "",
    language: "en",
  })

  const { LANGUAGE_TEXT, TITLE_TEXT, CREATE_SECTION_TEXT } = useLanguage({
    TITLE_TEXT: { en: "Title", es: "Título" },
    LANGUAGE_TEXT: { en: "Language", es: "Lenguage" },
    CREATE_SECTION_TEXT: { en: "Create Section", es: "Añadir Sección" },
  })

  const handleChange = (key: keyof CreateApiDocDTO, value: string) => {
    setNewSectionForm({ ...newSectionForm, [key]: value })
  }

  const handleSubmit = () => {
    handleAddSection(newSectionForm.sectionTitle, newSectionForm.language)
    handleCloseModal()
  }

  return (
    <div className='w-full flex flex-col'>
      <ModalTitle titleText='Add Api Doc Section' />

      <div className='flex w-full flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
            {TITLE_TEXT}:
          </label>
          <ChacaTextInput
            onChange={(v) => handleChange("sectionTitle", v)}
            size='full'
            placeholder='Section Title'
            value={newSectionForm.sectionTitle}
          />
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
            {LANGUAGE_TEXT}:
          </label>
          <ChacaSelect
            onChange={(v) => handleChange("language", v)}
            options={LANGUAGES_ARRAY}
            placeholder='Language'
            value={newSectionForm.language}
            size='full'
          />
        </div>
      </div>

      <ModalButtons handleNext={handleSubmit} nextText={CREATE_SECTION_TEXT} type='edit' />
    </div>
  )
}
