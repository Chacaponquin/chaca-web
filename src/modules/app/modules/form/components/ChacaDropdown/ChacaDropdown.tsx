import { useClickOutside } from "@modules/shared/hooks"
import clsx from "clsx"
import { useRef, useState, useCallback } from "react"

interface Props {
  header: React.ReactNode
  children: React.ReactNode
  className?: string
  id?: string
  full?: boolean
  height: number
}

export default function ChacaDropdown({
  children,
  header,
  className: iclass,
  id,
  height,
  full,
}: Props) {
  const [open, setOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const LIST_CLASS = clsx(
    "absolute",
    "z-20",
    "overflow-auto",
    "mt-2",
    "flex flex-col",
    "dark:border-scale-7 border-[1px]",
    "p-1",
    "gap-y-0.5",
    "rounded",
    "z-50",
    "bg-white dark:bg-scale-3",
    iclass,
  )

  const onClickOutside = useCallback(() => {
    setOpen(false)
  }, [])

  function handleOpen() {
    setOpen((prev) => !prev)
  }

  function handleClickList() {
    setOpen(false)
  }

  useClickOutside({ element: wrapperRef, onClickOutside: onClickOutside })

  return (
    <div id={id} className={clsx(full ? "w-full" : "")} ref={wrapperRef}>
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
