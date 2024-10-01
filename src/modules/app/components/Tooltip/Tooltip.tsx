import clsx from "clsx"
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
  }, [position, elementRef, textRef, show, children])

  const CLASS = clsx(
    "shadow-lg",
    "bg-scale-3 dark:bg-scale-3",
    "text-sm",
    "absolute",
    "px-3 py-1.5",
    "text-white",
    "rounded",
    "whitespace-nowrap",
  )

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      <p
        className={CLASS}
        style={{
          transform: `translateX(${posStyle.translateX}px) translateY(${posStyle.translateY}px)`,
          visibility: show ? "visible" : "hidden",
        }}
        ref={textRef}
      >
        {text}
      </p>

      <div ref={elementRef}>{children}</div>
    </div>
  )
}
