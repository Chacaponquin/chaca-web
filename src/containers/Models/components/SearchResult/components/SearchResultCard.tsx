import { Like, Share, X } from "../../../../../shared/assets/icons"
import { useState } from "react"
import clsx from "clsx"
import { ChacaSimpleButton } from "../../../../../shared/components/ChacaButton"

export default function SearchResultCard() {
  const [openCard, setOpenCard] = useState(false)

  const cardClass = clsx("flex flex-col rounded px-4 gap-1 border-2 border-solid", {
    "border-principalColor py-2": openCard,
    "py-1": !openCard,
  })

  const buttonClass = clsx("transition-all duration-300", {
    "rotate-45": !openCard,
    "rotate-0": openCard,
  })

  const handleInteractiveCard = () => {
    setOpenCard(!openCard)
  }

  const handleDeleteModel = () => {
    console.log("Hola")
  }

  return (
    <div className={cardClass}>
      <div className='flex items-center justify-between gap-3'>
        <h1 className='font-fontBold text-lg mb-0'>Lorem ipsum dolor sit.</h1>
        <button className={buttonClass} onClick={handleInteractiveCard}>
          <X size={14} />
        </button>
      </div>

      {openCard && (
        <div>
          <p className='text-base text-slate-500 mb-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum fuga vero
            sunt, at ipsam!
          </p>
          <div className='flex justify-between items-center gap-5 w-full'>
            <div className='flex gap-5 items-center'>
              <div className='flex items-center gap-1'>
                <Like size={20} />
                <p className='mb-0 text-base'>345</p>
              </div>

              <div className='flex items-center gap-1'>
                <Share size={20} />
                <p className='mb-0 text-base'>345</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <ChacaSimpleButton
                className='2xl:flex hidden'
                color='primary'
                size='small'
                text='See Model'
              />

              <ChacaSimpleButton
                color='danger'
                size='small'
                text='Delete'
                onClick={handleDeleteModel}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
