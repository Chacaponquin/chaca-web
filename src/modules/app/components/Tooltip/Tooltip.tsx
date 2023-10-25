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

    if (elementRef.current) {
      width = elementRef.current.clientWidth
      height = elementRef.current.clientHeight
    }

    switch (position) {
      case "top":
        return { translateX: 0, translateY: -height - OFFSET }
      case "right":
        return { translateX: width + OFFSET, translateY: 0 }
      case "left":
        return { translateX: -width - OFFSET, translateY: 0 }
      case "bottom":
        return { translateX: 0, translateY: height + OFFSET }
      default:
        return { translateX: 0, translateY: -height - OFFSET }
    }
  }, [position, elementRef.current])

  return (
    <div className="relative" onMouseEnter={handleShow} onMouseLeave={handleHide}>
      {show && (
        <div
          className="shadow-lg bg-darkColor text-white px-3 py-1 rounded absolute"
          style={{
            transform: `translateX(${posStyle.translateX}px) translateY(${posStyle.translateY}px)`,
          }}
        >
          {text}
        </div>
      )}

      <div ref={elementRef}>{children}</div>
    </div>
  )
}
