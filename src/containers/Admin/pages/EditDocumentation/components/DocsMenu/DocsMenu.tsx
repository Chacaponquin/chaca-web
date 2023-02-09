import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import React from "react"
import { DocsSections } from "./components"

export default function DocsMenu() {
  return (
    <div className='w-[250px] min-w-[250px] border-r-2 h-screen flex flex-col py-4 px-3 no-scroll'>
      <div>
        <ChacaSimpleButton color='primary' text='New Section' size='medium' className='!w-full' />
      </div>

      <DocsSections />
    </div>
  )
}
