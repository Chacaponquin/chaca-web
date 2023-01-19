import { useState } from "react"
import { ChacaTextInput, ChacaTextarea } from "@form"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { v4 as uuid } from "uuid"
import { X } from "@modules/shared/assets/icons"
import { SaveSchemaForm } from "@modules/config/interfaces/config.iterface"
import { configServices } from "@modules/config/services"
import { toast } from "react-toastify"
import { EmptyFormFieldError } from "@modules/config/errors"

export default function FormContent({ saveSchemaForm }: { saveSchemaForm: SaveSchemaForm }) {
  const { updateSaveSchemaForm } = configServices()
  const [newTag, setNewTag] = useState("")

  const handleChangeNewTag = (tag: string) => {
    setNewTag(tag)
  }

  const handleChangeFormValue = (key: keyof SaveSchemaForm, value: string) => {
    try {
      updateSaveSchemaForm(key, value)
    } catch (error) {
      if (error instanceof EmptyFormFieldError) toast(`The field ${error.message} can not be empty`)
    }
  }

  return (
    <div className='flex flex-col w-full gap-2'>
      <div className='flex flex-col w-full'>
        <label htmlFor='' className='text-base'>
          Model name
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
          Description
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
          Tags
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
            onClick={() => {
              handleChangeFormValue("tags", newTag)
            }}
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
