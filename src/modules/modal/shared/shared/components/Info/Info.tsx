import { Info as InfoIcon } from "@modules/app/modules/icon/components"
import { createRef, useMemo, useState } from "react"

interface Props {
  children: React.ReactNode
  position: "right" | "left" | "top" | "bottom"
}

interface PositionStyle {
  translateX: number
  translateY: number
}

export default function Info({ children, position }: Props) {
  const [show, setShow] = useState(false)

  const ref = createRef<HTMLElement>()
  const modalRef = createRef<HTMLDivElement>()

  const posStyle: PositionStyle = useMemo(() => {
    let width = 50
    let height = 50

    const OFFSET = 5

    if (ref.current && modalRef.current) {
      width = modalRef.current.clientWidth
      height = ref.current.clientHeight
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
  }, [ref, modalRef, show, children])

  return (
    <div
      className="flex items-center cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <i ref={ref} className="stroke-gray-300">
        <InfoIcon size={18} />
      </i>

      {show && (
        <div
          className="absolute z-20 shadow-md rounded px-2.5 py-1.5 bg-scale-5"
          style={{
            transform: `translateX(${posStyle.translateX}px) translateY(${posStyle.translateY}px)`,
            visibility: show ? "visible" : "hidden",
          }}
          ref={modalRef}
        >
          {children}
        </div>
      )}
    </div>
  )
}
