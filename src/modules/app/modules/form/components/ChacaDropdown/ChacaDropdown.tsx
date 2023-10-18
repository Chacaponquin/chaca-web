import clsx from "clsx"
import { ReactElement, useRef, useEffect, useState, useCallback } from "react"

interface Props {
  header: ReactElement
  children: React.ReactNode
  className?: string
  id?: string
}

export default function ChacaDropdown({ children, header, className: inputClassName, id }: Props) {
  const [open, setOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const className = clsx("absolute z-20 mt-2", inputClassName)

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
          style={{ minWidth: `${headerRef.current?.clientWidth}px` }}
          className={className}
        >
          {children}
        </ul>
      )}
    </div>
  )
}
