import { Config } from "@modules/app/modules/icon/components"
import React from "react"

export default function CardHeader() {
  return (
    <header className='flex relative justify-center py-5 px-10 border-b-[1px] border-white items-center gap-x-3'>
      <h1 className='text-3xl font-fontBold'>User</h1>
      <p className='text-2xl'>(50)</p>

      <button className='absolute right-7'>
        <Config size={22} />
      </button>
    </header>
  )
}
