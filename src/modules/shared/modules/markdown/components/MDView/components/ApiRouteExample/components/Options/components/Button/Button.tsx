import clsx from "clsx"
import { Options } from "../../../../interfaces"

interface Props {
  selectedOption: Options
  option: Options
  handleChange(o: Options): void
  text: string
}

export default function Button({ handleChange, option, selectedOption, text }: Props) {
  const BUTTON_CLASS = clsx(
    "px-6 py-2",
    "text-white",
    "font-fontSemiBold",
    "rounded-sm",
    "text-lg",
    {
      "bg-scale-11/20": option === selectedOption,
    },
  )

  function handleClick() {
    handleChange(option)
  }

  return (
    <button className={BUTTON_CLASS} onClick={handleClick}>
      {text}
    </button>
  )
}
