import { APP_IMAGES } from "@modules/shared/constant"
import React from "react"

export default function ChacaLogo() {
  return (
    <div className='flex gap-x-2 items-center'>
      <img src={APP_IMAGES.LOGO.image} alt={APP_IMAGES.LOGO.alt} className='w-[50px]' />
      <p className='mb-0 text-xl font-fontExtraBold uppercase'>CHACA</p>
    </div>
  )
}
