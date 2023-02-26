/* eslint-disable @typescript-eslint/no-empty-function */

import { ArrowDown } from "@modules/shared/assets/icons"
import React, { useState, useRef, useMemo, useEffect, useContext } from "react"
import { v4 as uuid } from "uuid"
import clsx from "clsx"
import { useFilters } from "../../hooks"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { Size } from "../../interfaces/dimension.interface"
import { AppConfigContext } from "@modules/shared/context"

interface ChacaSelectStringProps extends ChacaFormProps<string> {
  size?: Size
  placeholder: string
  options: Array<string>
}

interface ChacaObjectSelectProps<T> extends ChacaFormProps<unknown> {
  size?: Size
  placeholder: string
  options: Array<T>
  labelKey: keyof T
  valueKey: keyof T
}

type Props<T> = T extends string ? ChacaSelectStringProps : ChacaObjectSelectProps<T>

interface SelectOptions {
  label: string
  value: string
}

export default function ChacaSelect<T>(props: Props<T>) {
  const { handleOpenDropDown, openDropdown } = useContext(AppConfigContext)

  const { onChange, options, placeholder, value, dimension = "normal", size = "full" } = props

  const selectID = useMemo(() => uuid(), [])
  const openOptions = useMemo(() => {
    return selectID === openDropdown
  }, [openDropdown])

  const [selectIndex, setSelectIndex] = useState<null | number>(null)
  const [selectOptions, setSelectOptions] = useState<Array<SelectOptions>>([])

  const parentDiv = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    options.forEach((o) => {
      if (typeof o === "string") {
        setSelectOptions((prev) => [...prev, { label: o, value: o }])
      } else {
        const customProps = props as ChacaObjectSelectProps<T>

        setSelectOptions((prev) => [
          ...prev,
          { label: o[customProps.labelKey] as string, value: o[customProps.valueKey] as string },
        ])
      }
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
      handleOpenDropDown("")

      document.onclick = () => {}
    } else {
      handleOpenDropDown(selectID)
      event.stopPropagation()

      document.onclick = (e) => {
        const target = e.target as HTMLElement

        console.log(target)

        if (!target.id || !(target.id === openDropdown)) {
          handleOpenDropDown("")
        }
      }
    }
  }

  const handleSelectOption = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.stopPropagation()
    setSelectIndex(index)
    onChange(selectOptions[index]["value"])
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
      "px-4 py-1 cursor-pointer duration-300 transition-all",
      {
        "bg-slate-100": index === selectIndex,
        "hover:bg-slate-100": index !== selectIndex,
      },
      textClass,
      paddingClass,
    )

  return (
    <div
      className='flex flex-col'
      style={{
        width: size === "full" ? "100%" : `${size}px`,
        minWidth: size === "full" ? "100px" : `${size}px`,
      }}
    >
      <div
        id={selectID}
        className={parentClass}
        onClick={(e) => handleInteractiveOptions(e)}
        ref={parentDiv}
      >
        <p className='pointer-events-none overflow-x-auto no-scroll'>
          {selectIndex !== null ? String(selectOptions[selectIndex]["label"]) : placeholder}
        </p>

        <button className=''>
          <ArrowDown size={18} />
        </button>
      </div>

      {openOptions && (
        <div
          className='flex flex-col z-50 bg-white rounded-sm shadow-lg absolute max-h-[300px] overflow-y-auto'
          style={{
            width: optionsStyle.width,
            transform: `translateY(${optionsStyle.translateY})`,
          }}
        >
          {options.map((o, index) => (
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
