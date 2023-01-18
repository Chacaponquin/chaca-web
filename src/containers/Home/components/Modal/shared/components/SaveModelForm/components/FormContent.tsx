import { useState } from "react"
import { ChacaTextInput, ChacaTextarea } from "@form"
import { ChacaSimpleButton } from "@shared/components/ChacaButton"
import { v4 as uuid } from "uuid"
import { X } from "@shared/assets/icons"

export default function FormContent() {
  const [form, setForm] = useState({ name: "", description: "", tags: [] as Array<string> })
  const [newTag, setNewTag] = useState("")

  const handleAddTag = () => {
    setForm({ ...form, tags: [...form.tags, newTag] })
  }

  return (
    <div className='flex flex-col w-full gap-2'>
      <div className='flex flex-col w-full'>
        <label htmlFor='' className='text-base'>
          Model name
        </label>
        <ChacaTextInput
          value={form.name}
          onChange={(v) => {
            setForm({ ...form, name: v })
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
            setForm({ ...form, description: v })
          }}
          value={form.description}
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
            onChange={(v) => {
              setNewTag(v)
            }}
            placeholder='New Tag'
            dimension='normal'
          />
          <ChacaSimpleButton size='medium' text='Add' color='primary' onClick={handleAddTag} />
        </div>

        <div className='flex flex-wrap gap-x-2 mt-2 gap-y-1 w-full'>
          {form.tags.map((tag) => (
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
