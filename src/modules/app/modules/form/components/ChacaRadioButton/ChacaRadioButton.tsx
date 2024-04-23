import clsx from "clsx"

interface Props {
  value: boolean
  onChange(value: boolean): void
}

export default function ChacaRadioButton({ value, onChange }: Props) {
  const containerClass = clsx(
    "flex items-center justify-center",
    "w-[13px] h-[13px]",
    "transition-all duration-200",
    "bg-white",
    "cursor-pointer",
    "rounded-full",
    "outline-2",

    {
      "outline-scale-5 border-2 hover:border-purple-6": !value,
      "outline-purple-6": value,
    },
  )

  const subDivClass = clsx(
    "w-[8px] h-[8px]",
    "bg-purple-6",
    "transition-all duration-200",
    "rounded-full",
    {
      "scale-0": !value,
      "scale-100": value,
    },
  )

  return (
    <div onClick={() => onChange(!value)} className={containerClass}>
      <div className={subDivClass}></div>
    </div>
  )
}
