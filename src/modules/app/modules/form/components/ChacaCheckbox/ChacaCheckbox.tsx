import { Check } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { useId, Fragment } from "react"

interface Props {
  check: boolean
  id?: string
  handleChange: (v: boolean) => void
}

export default function ChacaCheckbox({ check, handleChange, id }: Props) {
  const inputId = id || useId()

  const checkClass = clsx(
    "flex items-center justify-center",
    "stroke-black",
    "w-[32px] h-[32px]",
    "rounded",
    "transition-all durarion-200",
    "dark:border-[1px] border-[1px]",

    { "bg-white dark:bg-scale-5": !check },
    { "dark:border-scale-10 border-scale-10": !check },

    { "stroke-white dark:bg-purple-6 bg-purple-6": check },
    { "dark:border-scale-7": check },
  )

  return (
    <Fragment>
      <div className={checkClass} onClick={() => handleChange(!check)}>
        {check && <Check size={15} />}
      </div>

      <input
        type="checkbox"
        id={inputId}
        checked={check}
        style={{
          display: "none",
        }}
        onChange={(e) => handleChange(e.target.checked)}
      />
    </Fragment>
  )
}
