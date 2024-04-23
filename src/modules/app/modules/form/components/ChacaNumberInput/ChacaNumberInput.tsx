import { useMemo, useState, useRef, useId } from "react"
import { ChacaFormProps, Size } from "../../interfaces"
import { ArrowDown, ArrowUp } from "@modules/app/modules/icon/components"
import clsx from "clsx"

interface Props extends ChacaFormProps<number> {
  min?: number
  max?: number
  step?: number
  size: Size
}

export default function ChacaNumberInput({ min, max, step = 1, value, size, onChange, id }: Props) {
  const inputId = id ? id : useId()

  const [isFocus, setIsFocus] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const upButton = useRef<HTMLButtonElement | null>(null)
  const downButton = useRef<HTMLButtonElement | null>(null)

  const height = useMemo(() => {
    switch (size) {
      case "sm":
        return 33
      case "base":
        return 38
      case "lg":
        return 43
      default:
        return 30
    }
  }, [size])

  const iconSize = useMemo(() => {
    switch (size) {
      case "sm":
        return 11
      case "base":
        return 13
      case "lg":
        return 15
      default:
        return 13
    }
  }, [size])

  function handleIncrease() {
    const nextValue = value ? Number(Number(value + step).toFixed(2)) : 1
    onChange(validateValue(nextValue, max))
  }

  function handleDecrease() {
    const nextValue = value ? Number(Number(value - step).toFixed(2)) : -1
    onChange(validateValue(nextValue, min))
  }

  function handleChangeInputValue(value: string) {
    if (typeof Number(value) === "number") {
      onChange(validateValue(Number(value), wichIsCloser(Number(value))))
    }
  }

  function wichIsCloser(nextValue: number): number {
    if (!nextValue) return value

    if (exists(max) && exists(min)) {
      const diferenceMin = (min as number) - nextValue
      const diferenceMax = (min as number) - nextValue

      if (diferenceMax !== diferenceMin) {
        if (diferenceMax < diferenceMin) {
          return max as number
        } else {
          return min as number
        }
      } else {
        return min as number
      }
    } else if (!exists(min) && !exists(max)) {
      return nextValue
    } else if (!exists(min) && exists(max)) {
      return max as number
    } else if (exists(min) && !exists(max)) {
      return min as number
    } else {
      return nextValue
    }
  }

  function validateValue(value: number, returnDefaultValue: number | undefined = 0): number {
    if (!exists(min) && !exists(max)) {
      return value
    } else if (exists(min) && !exists(max)) {
      if (value >= (min as number)) {
        return value
      } else {
        return returnDefaultValue
      }
    } else if (!exists(min) && exists(max)) {
      if (value <= (max as number)) {
        return value
      } else return returnDefaultValue
    } else if (exists(min) && exists(max)) {
      if (value >= (min as number) && value <= (max as number)) {
        return value
      } else {
        return returnDefaultValue
      }
    } else {
      return returnDefaultValue
    }
  }

  function exists(value: number | undefined): boolean {
    return !(value === undefined)
  }

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

  const CONTAINER_CLASS = clsx(
    "w-full",
    "flex items-center",
    "transition-all duration-300",
    "rounded-sm",
    "border-2",
    "bg-white dark:bg-scale-5",

    {
      "border-purple-6 dark:border-scale-9": isFocus || isHover,
      "border-scale-11 dark:border-transparent": !isFocus && !isHover,
    },
  )

  const INPUT_CLASS = clsx(
    "h-full w-full",
    "bg-transparent",
    "outline-none",
    "py-1.5",
    {
      "text-base": size === "sm",
      "text-lg": size === "base",
      "text-xl": size === "lg",
    },
    {
      "px-3": size === "sm",
      "px-4": size === "base",
      "px-5": size === "lg",
    },
  )

  return (
    <div className={CONTAINER_CLASS} style={{ height: height }}>
      <input
        className={INPUT_CLASS}
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

      <div className="grid grid-rows-2 h-full w-[25px] justify-center justify-items-center">
        <button
          className="flex stroke-black dark:stroke-white justify-center text-center items-center w-full cursor-auto"
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
