import { ChacaSelect, ChacaTextInput } from "@form"
import { Save } from "@modules/shared/assets/icons"
import { ChacaIconButton } from "@modules/shared/components/ChacaButton"
import { LANGUAGES_ARRAY } from "@modules/shared/modules/appConfig/constants/LANGUAGE"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"

export default function DocsConfigHeader({
  handleChangeLanguage,
  handleChangeTitle,
  language,
  title,
  handleUpdateApiDocSubSection,
}: {
  handleChangeTitle: (value: string) => void
  handleChangeLanguage: (value: string) => void
  title: string
  language: string
  handleUpdateApiDocSubSection: () => void
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
      <div className='flex items-center gap-x-4'>
        <div>
          <ChacaSelect
            options={LANGUAGES_ARRAY}
            onChange={(v) => handleChangeLanguage(v)}
            placeholder='Select Language'
            value={language}
            dimension='small'
          />
        </div>

        <div className='flex items-center'>
          <ChacaIconButton
            text='Save'
            icon={<Save size={18} />}
            color='gradient'
            size='medium'
            onClick={handleUpdateApiDocSubSection}
          />
        </div>
      </div>
    </div>
  )
}
