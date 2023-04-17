import { ArrowRight } from "@modules/shared/assets/icons"
import { APP_ROUTES } from "@modules/shared/routes"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function StartButton({ text }: { text: string }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link to={APP_ROUTES.HOME}>
      <button
        className='border-black flex justify-end esm:h-[45px] h-[50px] border-2 rounded-sm pl-10 pr-6 py-2 text-black hover:bg-principalColor bg-transparent hover:text-white hover:border-principalColor hover:fill-white fill-black stroke-black hover:stroke-white transition-all duration-300 items-center'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className='flex items-center w-full justify-between'>
          <div className='flex items-center gap-x-6'>
            <p className='font-fontBold text-2xl esm:text-xl'>{text}</p>

            <div
              style={{ transform: `translateX(${isHover ? 10 : 0}px)` }}
              className='transition-all duration-300'
            >
              <ArrowRight size={30} />
            </div>
          </div>
        </div>
      </button>
    </Link>
  )
}
