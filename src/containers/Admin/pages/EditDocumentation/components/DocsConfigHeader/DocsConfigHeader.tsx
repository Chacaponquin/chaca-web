import { ChacaSelect } from "@form"
import { LANGUAGES_ARRAY } from "@modules/shared/constant/LANGUAGE"
import React from "react"

export default function DocsConfigHeader() {
  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <div className='w-full border-2 h-[50px] flex items-center justify-between px-5'>
      <div></div>
      <div>
        <ChacaSelect
          options={LANGUAGES_ARRAY}
          onChange={(v) => handleChange(v as string)}
          placeholder='Select Language'
          value='es'
        />
      </div>
    </div>
  )
}
