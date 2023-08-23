import { ArrowDown } from "@modules/app/modules/icon/components"
import React, { useState, useRef, useMemo, useEffect } from "react"
import { v4 as uuid } from "uuid"
import clsx from "clsx"
import { useFilters } from "../../../../modules/form/hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { Size } from "../../interfaces/dimension.interface"
import { useMenu } from "@modules/shared/hooks"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ChacaObjectSelectProps<T> extends ChacaFormProps<any> {
  size?: Size
  placeholder: string
  options: Array<T>
  labelKey: keyof T
  valueKey: keyof T
}

type Props<T> = ChacaObjectSelectProps<T>

interface SelectOptions {
  label: string
  value: string
}

export default function ChacaSelect<T>(props: Props<T>) {
  const { onChange, options, placeholder, value, dimension = "normal", size = "full" } = props

  const [selectIndex, setSelectIndex] = useState<null | number>(null)
  const [selectOptions, setSelectOptions] = useState<Array<SelectOptions>>([])

  const parentDiv = useRef<null | HTMLDivElement>(null)
  const refDiv = useRef<null | HTMLDivElement>(null)

  const { handleCloseMenu, handleOpenMenu, isOpen: openOptions } = useMenu({ ref: refDiv })

  useEffect(() => {
    setSelectOptions([])

    options.forEach((o) => {
      const customProps = props as ChacaObjectSelectProps<T>

      setSelectOptions((prev) => [
        ...prev,
        { label: o[customProps.labelKey] as string, value: o[customProps.valueKey] as string },
      ])
    })
  }, [options])

  useEffect(() => {
    selectOptions.forEach((o, index) => {
      if (o["value"] === value) {
        setSelectIndex(index)
      }
    })
  }, [value, selectOptions])

  const { paddingClass, textClass } = useFilters({ dimension })

  const handleInteractiveOptions = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (openOptions) {
      handleCloseMenu()
    } else {
      event.stopPropagation()
      handleOpenMenu()
    }
  }

  const handleSelectOption = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.stopPropagation()
    setSelectIndex(index)

    if (onChange) {
      onChange(selectOptions[index]["value"])
    }

    handleCloseMenu()
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
  }, [parentDiv.current?.clientHeight, size, dimension])

  const parentClass = clsx(
    "w-full flex items-center border-solid transition-all duration-300 justify-between bg-white py-[2px] border-2 border-grayColor cursor-pointer rounded-sm gap-5 whitespace-nowrap",
    { "border-principalColor": openOptions, "hover:border-principalColor": !openOptions },
    textClass,
    paddingClass,
  )

  const optionClass = (index: number) =>
    clsx(
      "py-2 cursor-pointer duration-300 transition-all",
      {
        "bg-slate-100": index === selectIndex,
        "hover:bg-slate-200": index !== selectIndex,
      },
      textClass,
      paddingClass,
    )

  return (
    <div
      className="flex flex-col relative"
      style={{
        width: size === "full" ? "100%" : `${size}px`,
        minWidth: size === "full" ? "100px" : `${size}px`,
      }}
    >
      <div className={parentClass} onClick={(e) => handleInteractiveOptions(e)} ref={parentDiv}>
        <p className="pointer-events-none overflow-x-auto no-scroll">
          {selectIndex !== null ? String(selectOptions[selectIndex]["label"]) : placeholder}
        </p>

        <button>
          <ArrowDown size={18} />
        </button>
      </div>

      {openOptions && (
        <div
          className="flex w-full flex-col z-50 bg-white rounded-sm shadow-lg absolute max-h-[300px] overflow-y-auto"
          style={{
            transform: `translateY(${optionsStyle.translateY})`,
          }}
        >
          {options.map((_, index) => (
            <div
              key={uuid()}
              className={optionClass(index)}
              onClick={(e) => handleSelectOption(e, index)}
            >
              {String(selectOptions[index]["label"])}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
