import { ChacaSelect, ChacaTextInput } from "@form"
import { LANGUAGES_ARRAY } from "@modules/shared/constant/LANGUAGE"
import { useLanguage } from "@modules/shared/hooks"

export default function DocsConfigHeader({
  handleChangeLanguage,
  handleChangeTitle,
  language,
  title,
}: {
  handleChangeTitle: (value: string) => void
  handleChangeLanguage: (value: string) => void
  title: string
  language: string
}) {
  const { TITLE_TEXT } = useLanguage({ TITLE_TEXT: { en: "Title", es: "Título" } })

  return (
    <div className='w-full flex items-center justify-between px-5 py-2'>
      <div className='flex items-center gap-x-3'>
        <h1 className='font-fontBold text-lg'>{TITLE_TEXT}</h1>
        <ChacaTextInput
          size={300}
          value={title}
          onChange={handleChangeTitle}
          placeholder='Section Title'
          dimension='small'
        />
      </div>
      <div>
        <ChacaSelect
          options={LANGUAGES_ARRAY}
          onChange={(v) => handleChangeLanguage(v)}
          placeholder='Select Language'
          value={language}
          dimension='small'
        />
      </div>
    </div>
  )
}
