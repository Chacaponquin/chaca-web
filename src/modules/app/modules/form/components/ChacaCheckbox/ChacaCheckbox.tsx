import { Size } from "@form/domain"
import { Check } from "@modules/app/modules/icon/components"
import clsx from "clsx"

interface Props {
  check: boolean
  id?: string
  handleChange(v: boolean): void
  size: Size
}

export default function ChacaCheckbox({ check, handleChange, size, id }: Props) {
  const CLASS = clsx(
    "flex items-center justify-center",
    "stroke-black",
    "rounded",
    "transition-all durarion-200",
    "border-[1px]",

    { "bg-white dark:bg-scale-5": !check },
    { "dark:border-scale-10 border-scale-10": !check },

    { "stroke-white dark:bg-purple-6 bg-purple-6": check },
    { "dark:border-scale-7": check },

    {
      "min-w-[22px] min-h-[22px]": size === "lg",
      "min-w-[20px] min-h-[20px]": size === "base",
      "min-w-[18px] min-h-[18px]": size === "sm",
    },
  )

  return (
    <>
      <button type="button" className={CLASS} onClick={() => handleChange(!check)}>
        {check && <Check size={11} />}
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
    </>
  )
}
