import { ArrowRight, GitHub } from "@modules/shared/assets/icons"
import { useState } from "react"

export default function LinkButton({ link }: { link: string }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <a href={link} className='w-full' target='_blank' rel='noreferrer'>
      <button
        className='border-black w-full border-2 rounded-sm px-14 py-2 text-black hover:bg-black bg-white hover:text-white hover:fill-white fill-black transition-all duration-300'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className='flex items-center justify-between'>
          <GitHub size={50} />

          <div className='flex items-center gap-x-6'>
            <p className='font-fontBold text-2xl'>Github</p>

            <div
              style={{ transform: `translateX(${isHover ? 10 : 0}px)` }}
              className='transition-all duration-300'
            >
              <ArrowRight size={30} />
            </div>
          </div>
        </div>
      </button>
    </a>
  )
}
