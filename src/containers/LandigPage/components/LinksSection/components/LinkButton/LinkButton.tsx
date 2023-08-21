import { ArrowRight, GitHub, Npm } from "@modules/app/modules/icon/components"
import { useState } from "react"

export default function LinkButton({ link, type }: { link: string; type: "github" | "npm" }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <a href={link} target='_blank' rel='noreferrer' className='esm:w-full'>
      <button
        className='border-white esm:w-full w-[400px] h-[80px] border-2 rounded-sm px-14 py-2 text-white hover:bg-white bg-transparent hover:text-black hover:fill-black fill-white transition-all duration-300 flex items-center justify-between'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className='flex items-center w-full justify-between'>
          {type === "github" && <GitHub size={50} />}
          {type === "npm" && <Npm size={65} />}

          <div className='flex items-center gap-x-6 esm:gap-x-1'>
            <p className='font-fontBold text-2xl'>
              {type === "github" && "Github"}
              {type === "npm" && "NPM"}
            </p>

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
