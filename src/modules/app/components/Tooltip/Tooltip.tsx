import { useState, useRef, useMemo } from "react"

interface Props {
  position?: "right" | "top" | "bottom" | "left"
  children: React.ReactNode
  text: string
}

interface PositionStyle {
  translateX: number
  translateY: number
}

export default function Tooltip({ position = "top", children, text }: Props) {
  const [show, setShow] = useState(false)

  const textRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)

  function handleShow() {
    setShow(true)
  }

  function handleHide() {
    setShow(false)
  }

  const posStyle: PositionStyle = useMemo(() => {
    let width = 50
    let height = 50

    const OFFSET = 15

    if (elementRef.current && textRef.current) {
      width = textRef.current.clientWidth
      height = elementRef.current.clientHeight
    }

    switch (position) {
      case "top":
        return { translateX: 0, translateY: -height - OFFSET }
      case "right":
        return { translateX: width / 2 + OFFSET, translateY: 0 }
      case "left":
        return { translateX: -(width / 2) - OFFSET, translateY: 0 }
      case "bottom":
        return { translateX: 0, translateY: height + OFFSET }
      default:
        return { translateX: 0, translateY: -height - OFFSET }
    }
  }, [position, elementRef.current, textRef.current])

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      {show && (
        <div
          className="shadow-lg bg-scale-9 text-white px-3 py-1 rounded absolute"
          style={{
            transform: `translateX(${posStyle.translateX}px) translateY(${posStyle.translateY}px)`,
          }}
          ref={textRef}
        >
          {text}
        </div>
      )}

      <div ref={elementRef}>{children}</div>
    </div>
  )
}
