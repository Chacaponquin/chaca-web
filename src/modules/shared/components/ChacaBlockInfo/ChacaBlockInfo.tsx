import React, { useRef, useState } from "react"

interface MessagePosition {
  posX: number
  posY: number
}

export default function ChacaBlockInfo({
  children,
  message,
}: {
  children: React.ReactElement
  message: string
}) {
  const elementRef = useRef<null | HTMLDivElement>(null)

  const [view, setView] = useState(false)

  const [messagePosition, setMessagePosition] = useState<MessagePosition>({ posX: 0, posY: 0 })

  const handleHover = () => {
    if (elementRef.current) {
      setView(true)

      const position = elementRef.current.getBoundingClientRect()

      const translateX = position.x + 17
      const tranlateY = position.y + 17

      setMessagePosition({ posX: translateX, posY: tranlateY })
    }
  }

  const handleNoHover = () => {
    setView(false)
  }

  return (
    <div className='h-max'>
      <div
        className='h-max'
        onMouseEnter={handleHover}
        ref={elementRef}
        onMouseLeave={handleNoHover}
      >
        {children}
      </div>

      {view && (
        <div
          className='absolute top-0 left-0 px-3 py-1 text-sm bg-black text-white z-[999] shadow-sm'
          style={{
            transform: `translateX(${messagePosition.posX}px) translateY(${messagePosition.posY}px)`,
          }}
        >
          {message}
        </div>
      )}
    </div>
  )
}
