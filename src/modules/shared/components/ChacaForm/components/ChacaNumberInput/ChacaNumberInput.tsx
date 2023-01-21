import { useMemo, useState } from "react"
import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
import { Size } from "../../interfaces/dimension.interface"
import { ArrowDown, ArrowUp } from "@modules/shared/assets/icons"
import clsx from "clsx"

interface ChacaNumberInputProps extends ChacaFormProps<number> {
  min?: number
  max?: number
  step?: number
  size?: Size
}

export default function ChacaNumberInput({
  min = 10000000,
  max = -10000000,
  step = 1,
  size = "full",
  dimension = "normal",
  value,
  onChange,
}: ChacaNumberInputProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const height = useMemo(() => {
    switch (dimension) {
      case "small":
        return 25
      case "normal":
        return 30
      case "large":
        return 40
      default:
        return 60
    }
  }, [dimension])

  const iconSize = 12

  const handleIncrease = () => {
    onChange(validateValue(value + step, max))
  }

  const handleDecrease = () => {
    onChange(validateValue(value - step, min))
  }

  const handleChangeInputValue = (value: string) => {
    if (typeof Number(value) === "number") {
      onChange(validateValue(Number(value), 0))
    }
  }

  const validateValue = (value: number, returnDefaultValue: number): number => {
    if (value >= min && value <= max) {
      return value
    } else return returnDefaultValue
  }

  const containerClass = clsx(
    "flex items-center border-2 rounded-sm pl-1 transition-all duration-300",
    {
      "border-principalColor": isFocus || isHover,
      "border-grayColor": !isFocus && !isHover,
    },
  )

  return (
    <div className={containerClass} style={{ height }}>
      <input
        className='h-full outline-none px-2 text-sm bg-transparent focus:border-principalColor hover:border-principalColor py-[2px]'
        type='text'
        style={{
          width: size === "full" ? `100%` : `${size}px`,
        }}
        onChange={(e) => handleChangeInputValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        value={value}
      />
      <div className='grid grid-rows-2 h-full w-[20px] justify-center justify-items-center border-l-grayColor border-l-2'>
        <button
          className='flex justify-center text-center items-center'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleIncrease}
        >
          <ArrowUp size={iconSize} />
        </button>

        <button
          className='flex justify-center text-center items-center'
          onClick={handleDecrease}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ArrowDown size={iconSize} />
        </button>
      </div>
    </div>
  )
}
