import { ArrowRight } from "@shared/assets/icons"
import { useState, useRef, useMemo, useEffect } from "react"
import { v4 as uuid } from "uuid"
import clsx from "clsx"

interface ChacaSelectProps<T> {
  placeholder: string
  options: Array<T>
  labelKey: keyof T
  valueKey: keyof T
  size?: "full" | number
  dimension?: "normal" | "large" | "small"
  value: unknown
  onChange: (value: unknown) => void
}

export default function ChacaSelect<T>({
  placeholder,
  options,
  labelKey,
  valueKey,
  value,
  onChange,
  size = "full",
  dimension = "normal",
}: ChacaSelectProps<T>) {
  const [openOptions, setOpenOptions] = useState(false)
  const [selectIndex, setSelectIndex] = useState<null | number>(null)

  useEffect(() => {
    options.forEach((o, index) => {
      if (o[valueKey] === value) {
        setSelectIndex(index)
      }
    })
  }, [value])

  const parentDiv = useRef<null | HTMLDivElement>(null)

  const handleInteractiveOptions = () => {
    setOpenOptions(!openOptions)
  }

  const handleSelectOption = (index: number) => {
    setSelectIndex(index)
    setOpenOptions(false)
    onChange(options[index][valueKey])
  }

  const optionsStyle = useMemo(() => {
    if (parentDiv.current) {
      return {
        width: `${parentDiv.current.clientWidth + 2.5}px`,
        translateY: `${parentDiv.current.clientHeight + 5}px`,
      }
    } else {
      return { width: `${100}px`, translateY: `${50}px` }
    }
  }, [parentDiv.current, size, dimension])

  const parentClass = clsx(
    "w-full flex items-center border-solid transition-all duration-300 justify-between bg-white py-[2px] border-2 cursor-pointer rounded-sm gap-5",
    { "border-principalColor": openOptions, "hover:border-principalColor": !openOptions },
    { "text-sm": dimension === "small", "text-base": dimension === "normal" },
    { "px-3": dimension === "small", "px-4": dimension === "normal" },
  )

  const optionClass = (index: number) =>
    clsx(
      "px-4 py-1 cursor-pointer duration-300 transition-all",
      {
        "bg-slate-200": index === selectIndex,
        "hover:bg-slate-200": index !== selectIndex,
      },
      { "text-sm": dimension === "small", "text-base": dimension === "normal" },
      { "px-3": dimension === "small", "px-4": dimension === "normal" },
    )

  return (
    <div className='flex flex-col' style={{ width: size === "full" ? "100%" : `${size}px` }}>
      <div className={parentClass} onClick={handleInteractiveOptions} ref={parentDiv}>
        <p className='pointer-events-none'>
          {selectIndex !== null ? String(options[selectIndex][labelKey]) : placeholder}
        </p>

        <button className='rotate-90'>
          <ArrowRight size={18} />
        </button>
      </div>

      {openOptions && (
        <div
          className='flex flex-col z-[999] bg-white rounded-sm shadow-lg absolute h-[300px] overflow-y-auto'
          style={{
            width: optionsStyle.width,
            transform: `translateY(${optionsStyle.translateY})`,
          }}
        >
          {options.map((o, index) => (
            <div
              key={uuid()}
              className={optionClass(index)}
              onClick={() => handleSelectOption(index)}
            >
              {String(o[labelKey])}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
