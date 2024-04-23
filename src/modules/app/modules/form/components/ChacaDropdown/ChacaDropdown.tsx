import clsx from "clsx"
import { useRef, useEffect, useState, useCallback } from "react"

interface Props {
  header: React.ReactNode
  children: React.ReactNode
  className?: string
  id?: string
  height: number
}

export default function ChacaDropdown({ children, header, className: iclass, id, height }: Props) {
  const [open, setOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const LIST_CLASS = clsx("absolute", "z-20", "overflow-auto", "mt-2", iclass)

  const onClickOutside = useCallback(() => {
    setOpen(false)
  }, [])

  function handleOpen() {
    setOpen((prev) => !prev)
  }

  function handleClickList() {
    setOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClickOutside])

  return (
    <div id={id} className="" ref={wrapperRef}>
      <div className="flex items-center" onClick={handleOpen} ref={headerRef}>
        {header}
      </div>

      {open && (
        <ul
          onClick={handleClickList}
          style={{
            minWidth: `${headerRef.current?.clientWidth}px`,
            maxHeight: height ? `${height}px` : undefined,
          }}
          className={LIST_CLASS}
        >
          {children}
        </ul>
      )}
    </div>
  )
}
