/* eslint-disable @typescript-eslint/no-empty-function */

import { useMemo, useState, useRef, useId } from "react"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { Size } from "../../interfaces/dimension.interface"
import { ArrowDown, ArrowUp } from "@modules/app/modules/icon/components"
import clsx from "clsx"

interface ChacaNumberInputProps extends ChacaFormProps<number> {
  min?: number
  max?: number
  step?: number
  size?: Size
}

export default function ChacaNumberInput({
  min,
  max,
  step = 1,
  size = "full",
  dimension = "normal",
  value,
  onChange,
  id,
}: ChacaNumberInputProps) {
  const inputId = id ? id : useId()

  const [isFocus, setIsFocus] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const upButton = useRef<HTMLButtonElement | null>(null)
  const downButton = useRef<HTMLButtonElement | null>(null)

  const height = useMemo(() => {
    switch (dimension) {
      case "small":
        return 25
      case "normal":
        return 25
      case "large":
        return 30
      default:
        return 60
    }
  }, [dimension])

  const iconSize = 11

  function handleIncrease() {
    const nextValue = value ? Number(Number(value + step).toFixed(2)) : 1

    if (onChange) {
      onChange(validateValue(nextValue, max))
    }
  }

  function handleDecrease() {
    const nextValue = value ? Number(Number(value - step).toFixed(2)) : -1

    if (onChange) {
      onChange(validateValue(nextValue, min))
    }
  }

  function handleChangeInputValue(value: string) {
    if (typeof Number(value) === "number") {
      if (onChange) {
        onChange(validateValue(Number(value), wichIsCloser(Number(value))))
      }
    }
  }

  function wichIsCloser(nextValue: number): number {
    if (!nextValue) return value

    if (max && min) {
      const diferenceMin = min - nextValue
      const diferenceMax = min - nextValue

      if (diferenceMax !== diferenceMin) {
        if (diferenceMax < diferenceMin) {
          return max
        } else {
          return min
        }
      } else {
        return min
      }
    } else if (!min && !max) {
      return nextValue
    } else if (!min && max) {
      return max
    } else if (min && !max) {
      return min
    } else {
      return nextValue
    }
  }

  function validateValue(value: number, returnDefaultValue: number | undefined = 0): number {
    if (!min && !max) {
      return value
    } else if (min && !max) {
      if (value >= min) {
        return value
      } else {
        return returnDefaultValue
      }
    } else if (!min && max) {
      if (value <= max) {
        return value
      } else return returnDefaultValue
    } else if (min && max) {
      if (value >= min && value <= max) {
        return value
      } else return returnDefaultValue
    } else {
      return returnDefaultValue
    }
  }

  const containerClass = clsx(
    "flex items-center border-2 rounded-sm pl-1 transition-all duration-300",
    {
      "border-principalColor": isFocus || isHover,
      "border-grayColor": !isFocus && !isHover,
    },
  )

  function handleInteractKey(key: KeyboardEvent) {
    if (key.key === "ArrowUp") {
      if (upButton.current) {
        upButton.current.click()
      }
    } else if (key.key === "ArrowDown") {
      if (downButton.current) {
        downButton.current.click()
      }
    }
  }

  function handleFocus() {
    setIsFocus(true)
    document.addEventListener("keydown", handleInteractKey)
  }

  function handleBlur() {
    setIsFocus(false)
    document.removeEventListener("keydown", handleInteractKey)
  }

  return (
    <div
      className={containerClass}
      style={{ height, width: size === "full" ? `100%` : `${size}px` }}
    >
      <input
        className="h-full w-full outline-none px-2 text-sm bg-transparent focus:border-principalColor hover:border-principalColor py-[2px]"
        type="text"
        onChange={(e) => handleChangeInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        value={value === undefined ? 0 : value}
        id={inputId}
        min={min}
        max={max}
      />
      <div className="grid grid-rows-2 h-full w-[25px] justify-center justify-items-center border-l-grayColor border-l-2">
        <button
          className="flex stroke-black dark:stroke-white justify-center text-center items-center border-b-2 border-grayColor w-full cursor-auto"
          type="button"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleIncrease}
          ref={upButton}
        >
          <ArrowUp size={iconSize} />
        </button>

        <button
          className="flex stroke-black dark:stroke-white justify-center text-center items-center w-full cursor-auto"
          onClick={handleDecrease}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          ref={downButton}
          type="button"
        >
          <ArrowDown size={iconSize} />
        </button>
      </div>
    </div>
  )
}
