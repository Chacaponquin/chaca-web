import { Key } from "@modules/app/modules/icon/components"
import React from "react"

export default function Field({ field }: { field: string }) {
  return (
    <div className='flex text-lg items-center py-2 px-7 justify-between'>
      <div className='flex items-center gap-x-3'>
        <Key size={20} />
        <p className='font-fontMedium'>{field}</p>
      </div>

      <p className='font-fontMedium'>id.uuid</p>
    </div>
  )
}
