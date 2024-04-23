import { Size } from "@form/interfaces"
import { Check } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { Fragment } from "react"

interface Props {
  check: boolean
  id?: string
  handleChange(v: boolean): void
  size: Size
}

export default function ChacaCheckbox({ check, handleChange, size, id }: Props) {
  const checkClass = clsx(
    "flex items-center justify-center",
    "stroke-black",
    "rounded",
    "transition-all durarion-200",
    "dark:border-[1px] border-[1px]",

    { "bg-white dark:bg-scale-5": !check },
    { "dark:border-scale-10 border-scale-10": !check },

    { "stroke-white dark:bg-purple-6 bg-purple-6": check },
    { "dark:border-scale-7": check },

    {
      "min-w-[32px] min-h-[32px]": size === "lg",
      "min-w-[29px] min-h-[29px]": size === "base",
      "min-w-[25px] min-h-[25px]": size === "sm",
    },
  )

  return (
    <Fragment>
      <button type="button" className={checkClass} onClick={() => handleChange(!check)}>
        {check && <Check size={15} />}
      </button>

      <input
        type="checkbox"
        id={id}
        checked={check}
        style={{
          display: "none",
        }}
        onChange={(e) => handleChange(e.target.checked)}
      />
    </Fragment>
  )
}
