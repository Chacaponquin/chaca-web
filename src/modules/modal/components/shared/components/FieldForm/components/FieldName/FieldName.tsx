import { ChacaTextInput } from "@form/components"
import React from "react"

export default function FieldName({
  handleChangeName,
  text,
  name,
}: {
  handleChangeName: (v: string) => void
  text: string
  name: string
}) {
  return (
    <section className='flex items-center gap-3'>
      <label htmlFor='' className='font-fontMedium text-lg whitespace-nowrap'>
        {text}:
      </label>
      <ChacaTextInput
        onChange={handleChangeName}
        placeholder='Field name...'
        value={name}
        dimension='large'
      />
    </section>
  )
}
