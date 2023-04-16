import { APP_IMAGES } from "@modules/shared/constant"
import React from "react"
import { LinkButton } from "./components"
import { Link } from "react-router-dom"
import { LINKS } from "./constants/Links"

export default function MeSection() {
  return (
    <div className='w-screen py-20 flex justify-center'>
      <div className='flex w-[1000px] items-center justify-between'>
        <img src={APP_IMAGES.ME_IMAGE.image} alt={APP_IMAGES.ME_IMAGE.alt} className='w-[300px]' />

        <div className='flex flex-col'>
          <h1 className='font-fontExtraBold text-5xl'>
            Make with love by{" "}
            <a
              href={LINKS.CHACAPONQUIN_LINK}
              target='_blank'
              rel='noreferrer'
              className='font-fontExtraBold text-principalColor underline transition-all hover:opacity-70 duration-300'
            >
              Chacaponquin
            </a>
          </h1>

          <div className='flex flex-col mt-5 gap-y-8'>
            <LinkButton link={LINKS.CHACAPONQUIN_LINK} />
            <LinkButton link={LINKS.CHACAPONQUIN_LINK} />
          </div>
        </div>
      </div>
    </div>
  )
}
