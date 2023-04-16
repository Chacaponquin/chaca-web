import { ChacaTextInput, ChacaTextarea } from "@form"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { v4 as uuid } from "uuid"
import { X } from "@modules/shared/assets/icons"
import { SaveSchemaForm } from "@modules/config/interfaces/config.iterface"
import { useFormContent } from "./hooks"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"

export default function FormContent({ saveSchemaForm }: { saveSchemaForm: SaveSchemaForm }) {
  const { handleAddNewTag, handleChangeFormValue, handleChangeNewTag, newTag } = useFormContent()

  const { DESCRIPTION_TEXT, MODEL_NAME_TEXT, TAGS_TEXT } = useLanguage({
    MODEL_NAME_TEXT: { en: "Name", es: "Nombre" },
    DESCRIPTION_TEXT: { en: "Description", es: "Descripción" },
    TAGS_TEXT: { en: "Tags", es: "Etiquetas" },
  })

  return (
    <div className='flex flex-col w-full gap-2'>
      <div className='flex flex-col w-full'>
        <label htmlFor='' className='text-base'>
          {MODEL_NAME_TEXT}
        </label>
        <ChacaTextInput
          value={saveSchemaForm.name}
          onChange={(v) => {
            handleChangeFormValue("name", v)
          }}
          placeholder={"Model name"}
          size='full'
          dimension='normal'
        />
      </div>

      <div className='flex flex-col w-full'>
        <label htmlFor='' className='text-base'>
          {DESCRIPTION_TEXT}
        </label>
        <ChacaTextarea
          dimension='normal'
          height='normal'
          placeholder='Model description'
          onChange={(v) => {
            handleChangeFormValue("description", v)
          }}
          value={saveSchemaForm.description}
          size='full'
        />
      </div>

      <div className='flex flex-col w-full'>
        <label htmlFor='' className='text-base'>
          {TAGS_TEXT}
        </label>
        <div className='flex items-center gap-1'>
          <ChacaTextInput
            value={newTag}
            onChange={handleChangeNewTag}
            placeholder='New Tag'
            dimension='normal'
          />
          <ChacaSimpleButton
            size='medium'
            text='Add'
            color='primary'
            onClick={() => handleAddNewTag()}
          />
        </div>

        <div className='flex flex-wrap gap-x-2 mt-2 gap-y-1 w-full'>
          {saveSchemaForm.tags.map((tag) => (
            <div
              key={uuid()}
              className='flex items-center py-[3px] px-3 bg-principalColor text-white gap-2 rounded-sm'
            >
              <p className='mb-0'>{tag}</p>
              <button className='fill-white'>
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
